import React from 'react';
import i18n from '../../i18n';
import { TOP_ANAT_FLOW } from '../../hooks/useTopAnat';
import GaEvent from '../GaEvent/GaEvent';

const TopAnatActionButtons = ({
  status,
  handleSubmit,
  cancelJob,
  startNewJob,
  jobId,
}) => {
  switch (status) {
    case TOP_ANAT_FLOW.NEW_JOB:
      return (
        <div className="field">
          <p className="control">
            <button
              type="button"
              className="button is-success"
              onClick={handleSubmit}
            >
              {i18n.t('analysis.top-anat.submit-job')}
            </button>
          </p>
        </div>
      );
    case TOP_ANAT_FLOW.GOT_JOB:
      return (
        <div className="field">
          <p className="control">
            <GaEvent category="Top Anat" action="Cancel Job" label={jobId}>
              <button
                type="button"
                className="button is-danger"
                onClick={cancelJob}
              >
                {i18n.t('analysis.top-anat.cancel-job')}
              </button>
            </GaEvent>
          </p>
        </div>
      );
    case TOP_ANAT_FLOW.ERROR_LAUNCH_JOB:
    case TOP_ANAT_FLOW.ERROR_GET_JOB:
    case TOP_ANAT_FLOW.ERROR_GET_RESULTS:
    case TOP_ANAT_FLOW.GOT_RESULTS:
      return (
        <div className="field">
          <p className="control">
            <button
              type="button"
              className="button is-info"
              onClick={startNewJob(false)}
            >
              {i18n.t('analysis.top-anat.start-new-job')}
            </button>
          </p>
        </div>
      );
    default:
      return null;
  }
};

export default TopAnatActionButtons;
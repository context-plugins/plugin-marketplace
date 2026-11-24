from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.job_status20 import JobStatus20OrStr


class StartEntitiesDetectionJobResponse(SdkBaseModel):
    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """The identifier generated for the job. To get the status of job, use this identifier with the operation."""

    job_arn: Optional[str] = Field(default=UNSET, alias="JobArn")
    """The Amazon Resource Name (ARN) of the entities detection job. It is a unique, fully qualified identifier for the
    job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN
    is as follows: arn::comprehend:::entities-detection-job/ The following is an example job ARN:
    arn:aws:comprehend:us-west-2:111122223333:entities-detection-job/1234abcd12ab34cd56ef1234567890ab"""

    job_status: Optional[JobStatus20OrStr] = Field(default=UNSET, alias="JobStatus")
    """The status of the job. SUBMITTED - The job has been received and is queued for processing. IN_PROGRESS - Amazon
    Comprehend is processing the job. COMPLETED - The job was successfully completed and the output is available. FAILED
    - The job did not complete. To get details, use the operation. STOP_REQUESTED - Amazon Comprehend has received a
    stop request for the job and is processing the request. STOPPED - The job was successfully stopped without
    completing."""

    entity_recognizer_arn: Optional[str] = Field(default=UNSET, alias="EntityRecognizerArn")
    """The ARN of the custom entity recognition model."""


class StartEntitiesDetectionJobResponseDict(TypedDict):
    job_id: NotRequired[str]
    job_arn: NotRequired[str]
    job_status: NotRequired[JobStatus20OrStr]
    entity_recognizer_arn: NotRequired[str]

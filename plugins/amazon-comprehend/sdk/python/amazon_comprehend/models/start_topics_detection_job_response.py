from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.job_status26 import JobStatus26OrStr


class StartTopicsDetectionJobResponse(SdkBaseModel):
    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """The identifier generated for the job. To get the status of the job, use this identifier with the
    DescribeTopicDetectionJob operation."""

    job_arn: Optional[str] = Field(default=UNSET, alias="JobArn")
    """The Amazon Resource Name (ARN) of the topics detection job. It is a unique, fully qualified identifier for the
    job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN
    is as follows: arn::comprehend:::topics-detection-job/ The following is an example job ARN:
    arn:aws:comprehend:us-west-2:111122223333:document-classification-job/1234abcd12ab34cd56ef1234567890ab"""

    job_status: Optional[JobStatus26OrStr] = Field(default=UNSET, alias="JobStatus")
    """The status of the job: SUBMITTED - The job has been received and is queued for processing. IN_PROGRESS - Amazon
    Comprehend is processing the job. COMPLETED - The job was successfully completed and the output is available. FAILED
    - The job did not complete. To get details, use the DescribeTopicDetectionJob operation."""


class StartTopicsDetectionJobResponseDict(TypedDict):
    job_id: NotRequired[str]
    job_arn: NotRequired[str]
    job_status: NotRequired[JobStatus26OrStr]

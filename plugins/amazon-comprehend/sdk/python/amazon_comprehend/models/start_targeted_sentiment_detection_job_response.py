from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.job_status25 import JobStatus25OrStr


class StartTargetedSentimentDetectionJobResponse(SdkBaseModel):
    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """The identifier generated for the job. To get the status of a job, use this identifier with the
    DescribeTargetedSentimentDetectionJob operation."""

    job_arn: Optional[str] = Field(default=UNSET, alias="JobArn")
    """The Amazon Resource Name (ARN) of the targeted sentiment detection job. It is a unique, fully qualified
    identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
    format of the ARN is as follows: arn::comprehend:::targeted-sentiment-detection-job/ The following is an example job
    ARN: arn:aws:comprehend:us-west-2:111122223333:targeted-sentiment-detection-job/1234abcd12ab34cd56ef1234567890ab"""

    job_status: Optional[JobStatus25OrStr] = Field(default=UNSET, alias="JobStatus")
    """The status of the job. SUBMITTED - The job has been received and is queued for processing. IN_PROGRESS - Amazon
    Comprehend is processing the job. COMPLETED - The job was successfully completed and the output is available. FAILED
    - The job did not complete. To get details, use the DescribeTargetedSentimentDetectionJob operation."""


class StartTargetedSentimentDetectionJobResponseDict(TypedDict):
    job_id: NotRequired[str]
    job_arn: NotRequired[str]
    job_status: NotRequired[JobStatus25OrStr]

from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.job_status21 import JobStatus21OrStr


class StartEventsDetectionJobResponse(SdkBaseModel):
    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """An unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates
    one."""

    job_arn: Optional[str] = Field(default=UNSET, alias="JobArn")
    """The Amazon Resource Name (ARN) of the events detection job. It is a unique, fully qualified identifier for the
    job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN
    is as follows: arn::comprehend:::events-detection-job/ The following is an example job ARN:
    arn:aws:comprehend:us-west-2:111122223333:events-detection-job/1234abcd12ab34cd56ef1234567890ab"""

    job_status: Optional[JobStatus21OrStr] = Field(default=UNSET, alias="JobStatus")
    """The status of the events detection job."""


class StartEventsDetectionJobResponseDict(TypedDict):
    job_id: NotRequired[str]
    job_arn: NotRequired[str]
    job_status: NotRequired[JobStatus21OrStr]

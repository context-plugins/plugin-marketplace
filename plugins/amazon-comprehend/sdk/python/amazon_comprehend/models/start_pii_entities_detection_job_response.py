from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.job_status23 import JobStatus23OrStr


class StartPiiEntitiesDetectionJobResponse(SdkBaseModel):
    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """The identifier generated for the job."""

    job_arn: Optional[str] = Field(default=UNSET, alias="JobArn")
    """The Amazon Resource Name (ARN) of the PII entity detection job. It is a unique, fully qualified identifier for
    the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the
    ARN is as follows: arn::comprehend:::pii-entities-detection-job/ The following is an example job ARN:
    arn:aws:comprehend:us-west-2:111122223333:pii-entities-detection-job/1234abcd12ab34cd56ef1234567890ab"""

    job_status: Optional[JobStatus23OrStr] = Field(default=UNSET, alias="JobStatus")
    """The status of the job."""


class StartPiiEntitiesDetectionJobResponseDict(TypedDict):
    job_id: NotRequired[str]
    job_arn: NotRequired[str]
    job_status: NotRequired[JobStatus23OrStr]

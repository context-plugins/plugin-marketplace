from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.job_status18 import JobStatus18OrStr


class StartDocumentClassificationJobResponse(SdkBaseModel):
    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """The identifier generated for the job. To get the status of the job, use this identifier with the
    DescribeDocumentClassificationJob operation."""

    job_arn: Optional[str] = Field(default=UNSET, alias="JobArn")
    """The Amazon Resource Name (ARN) of the document classification job. It is a unique, fully qualified identifier for
    the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the
    ARN is as follows: arn::comprehend:::document-classification-job/ The following is an example job ARN:
    arn:aws:comprehend:us-west-2:111122223333:document-classification-job/1234abcd12ab34cd56ef1234567890ab"""

    job_status: Optional[JobStatus18OrStr] = Field(default=UNSET, alias="JobStatus")
    """The status of the job: SUBMITTED - The job has been received and queued for processing. IN_PROGRESS - Amazon
    Comprehend is processing the job. COMPLETED - The job was successfully completed and the output is available. FAILED
    - The job did not complete. For details, use the DescribeDocumentClassificationJob operation. STOP_REQUESTED -
    Amazon Comprehend has received a stop request for the job and is processing the request. STOPPED - The job was
    successfully stopped without completing."""

    document_classifier_arn: Optional[str] = Field(default=UNSET, alias="DocumentClassifierArn")
    """The ARN of the custom classification model."""


class StartDocumentClassificationJobResponseDict(TypedDict):
    job_id: NotRequired[str]
    job_arn: NotRequired[str]
    job_status: NotRequired[JobStatus18OrStr]
    document_classifier_arn: NotRequired[str]

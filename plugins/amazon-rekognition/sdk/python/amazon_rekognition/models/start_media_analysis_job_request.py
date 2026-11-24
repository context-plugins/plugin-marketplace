from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .media_analysis_input import MediaAnalysisInput, MediaAnalysisInputDict
from .media_analysis_operations_config import MediaAnalysisOperationsConfig, MediaAnalysisOperationsConfigDict
from .media_analysis_output_config import MediaAnalysisOutputConfig, MediaAnalysisOutputConfigDict


class StartMediaAnalysisJobRequest(SdkBaseModel):
    client_request_token: Optional[str] = Field(default=UNSET, alias="ClientRequestToken")
    """Idempotency token used to prevent the accidental creation of duplicate versions. If you use the same token with
    multiple StartMediaAnalysisJobRequest requests, the same response is returned. Use ClientRequestToken to prevent the
    same request from being processed more than once."""

    job_name: Optional[str] = Field(default=UNSET, alias="JobName")
    """The name of the job. Does not have to be unique."""

    operations_config: MediaAnalysisOperationsConfig = Field(alias="OperationsConfig")
    input: MediaAnalysisInput = Field(alias="Input")
    output_config: MediaAnalysisOutputConfig = Field(alias="OutputConfig")
    kms_key_id: Optional[str] = Field(default=UNSET, alias="KmsKeyId")
    """The identifier of customer managed AWS KMS key (name or ARN). The key is used to encrypt images copied into the
    service. The key is also used to encrypt results and manifest files written to the output Amazon S3 bucket."""


class StartMediaAnalysisJobRequestDict(TypedDict):
    client_request_token: NotRequired[str]
    job_name: NotRequired[str]
    operations_config: MediaAnalysisOperationsConfigDict
    input: MediaAnalysisInputDict
    output_config: MediaAnalysisOutputConfigDict
    kms_key_id: NotRequired[str]

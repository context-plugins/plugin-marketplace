from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status1 import Status1OrStr
from .media_analysis_input import MediaAnalysisInput, MediaAnalysisInputDict
from .media_analysis_job_failure_details import MediaAnalysisJobFailureDetails, MediaAnalysisJobFailureDetailsDict
from .media_analysis_manifest_summary import MediaAnalysisManifestSummary, MediaAnalysisManifestSummaryDict
from .media_analysis_operations_config import MediaAnalysisOperationsConfig, MediaAnalysisOperationsConfigDict
from .media_analysis_output_config import MediaAnalysisOutputConfig, MediaAnalysisOutputConfigDict
from .media_analysis_results import MediaAnalysisResults, MediaAnalysisResultsDict


class MediaAnalysisJobDescription(SdkBaseModel):
    job_id: str = Field(alias="JobId")
    """The identifier for a media analysis job."""

    job_name: Optional[str] = Field(default=UNSET, alias="JobName")
    """The name of a media analysis job."""

    operations_config: MediaAnalysisOperationsConfig = Field(alias="OperationsConfig")
    status: Status1OrStr = Field(alias="Status")
    """The status of the media analysis job being retrieved."""

    failure_details: Optional[MediaAnalysisJobFailureDetails] = Field(default=UNSET, alias="FailureDetails")
    creation_timestamp: RFC3339DateTime = Field(alias="CreationTimestamp")
    """The Unix date and time when the job was started."""

    completion_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CompletionTimestamp")
    """The Unix date and time when the job finished."""

    input: MediaAnalysisInput = Field(alias="Input")
    output_config: MediaAnalysisOutputConfig = Field(alias="OutputConfig")
    kms_key_id: Optional[str] = Field(default=UNSET, alias="KmsKeyId")
    """KMS Key that was provided in the creation request."""

    results: Optional[MediaAnalysisResults] = Field(default=UNSET, alias="Results")
    manifest_summary: Optional[MediaAnalysisManifestSummary] = Field(default=UNSET, alias="ManifestSummary")


class MediaAnalysisJobDescriptionDict(TypedDict):
    job_id: str
    job_name: NotRequired[str]
    operations_config: MediaAnalysisOperationsConfigDict
    status: Status1OrStr
    failure_details: NotRequired[MediaAnalysisJobFailureDetailsDict]
    creation_timestamp: RFC3339DateTime
    completion_timestamp: NotRequired[RFC3339DateTime]
    input: MediaAnalysisInputDict
    output_config: MediaAnalysisOutputConfigDict
    kms_key_id: NotRequired[str]
    results: NotRequired[MediaAnalysisResultsDict]
    manifest_summary: NotRequired[MediaAnalysisManifestSummaryDict]

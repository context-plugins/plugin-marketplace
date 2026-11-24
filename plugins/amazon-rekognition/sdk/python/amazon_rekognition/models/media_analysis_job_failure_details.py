from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.code_amazon_rekognition_media_analysis_job_api import CodeAmazonRekognitionMediaAnalysisJobApiOrStr


class MediaAnalysisJobFailureDetails(SdkBaseModel):
    code: Optional[CodeAmazonRekognitionMediaAnalysisJobApiOrStr] = Field(default=UNSET, alias="Code")
    """Error code for the failed job."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """Human readable error message."""


class MediaAnalysisJobFailureDetailsDict(TypedDict):
    code: NotRequired[CodeAmazonRekognitionMediaAnalysisJobApiOrStr]
    message: NotRequired[str]

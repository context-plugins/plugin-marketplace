from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .classification_job_response_dto import ClassificationJobResponseDto, ClassificationJobResponseDtoDict


class ClassificationJobBulkResponseDto(SdkBaseModel):
    """Response Dto for bulk classification job."""

    jobs: Optional[list[ClassificationJobResponseDto]] = UNSET
    """List of jobs"""


class ClassificationJobBulkResponseDtoDict(TypedDict):
    jobs: NotRequired[list[ClassificationJobResponseDtoDict]]

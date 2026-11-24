from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .classification_location_response_dto import (
    ClassificationLocationResponseDto,
    ClassificationLocationResponseDtoDict,
)


class ClassificationLocationBulkResponseDto(SdkBaseModel):
    """Response Dto for bulk classification location."""

    locations: Optional[list[ClassificationLocationResponseDto]] = UNSET
    """List of locations"""


class ClassificationLocationBulkResponseDtoDict(TypedDict):
    locations: NotRequired[list[ClassificationLocationResponseDtoDict]]

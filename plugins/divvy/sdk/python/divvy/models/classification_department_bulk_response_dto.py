from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .classification_department_response_dto import (
    ClassificationDepartmentResponseDto,
    ClassificationDepartmentResponseDtoDict,
)


class ClassificationDepartmentBulkResponseDto(SdkBaseModel):
    """Response Dto for bulk classification department."""

    departments: Optional[list[ClassificationDepartmentResponseDto]] = UNSET
    """List of departments"""


class ClassificationDepartmentBulkResponseDtoDict(TypedDict):
    departments: NotRequired[list[ClassificationDepartmentResponseDtoDict]]

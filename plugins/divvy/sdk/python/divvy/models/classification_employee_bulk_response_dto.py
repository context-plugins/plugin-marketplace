from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .classification_employee_response_dto import (
    ClassificationEmployeeResponseDto,
    ClassificationEmployeeResponseDtoDict,
)


class ClassificationEmployeeBulkResponseDto(SdkBaseModel):
    """Response Dto for bulk classification employee."""

    employees: Optional[list[ClassificationEmployeeResponseDto]] = UNSET
    """List of employees"""


class ClassificationEmployeeBulkResponseDtoDict(TypedDict):
    employees: NotRequired[list[ClassificationEmployeeResponseDtoDict]]

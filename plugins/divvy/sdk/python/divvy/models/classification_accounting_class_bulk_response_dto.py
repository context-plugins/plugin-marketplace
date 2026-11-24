from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .classification_accounting_class_response_dto import (
    ClassificationAccountingClassResponseDto,
    ClassificationAccountingClassResponseDtoDict,
)


class ClassificationAccountingClassBulkResponseDto(SdkBaseModel):
    """Response Dto for bulk classification accounting class."""

    accounting_classes: Optional[list[ClassificationAccountingClassResponseDto]] = Field(
        default=UNSET, alias="accountingClasses"
    )
    """List of accounting classes"""


class ClassificationAccountingClassBulkResponseDtoDict(TypedDict):
    accounting_classes: NotRequired[list[ClassificationAccountingClassResponseDtoDict]]

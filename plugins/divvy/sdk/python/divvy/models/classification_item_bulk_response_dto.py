from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .classification_item_response_dto import ClassificationItemResponseDto, ClassificationItemResponseDtoDict


class ClassificationItemBulkResponseDto(SdkBaseModel):
    """Response Dto for bulk classification item."""

    items: Optional[list[ClassificationItemResponseDto]] = UNSET
    """List of items"""


class ClassificationItemBulkResponseDtoDict(TypedDict):
    items: NotRequired[list[ClassificationItemResponseDtoDict]]

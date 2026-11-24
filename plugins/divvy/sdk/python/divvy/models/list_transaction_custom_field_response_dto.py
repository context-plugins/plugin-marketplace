from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_field_dto import CustomFieldDto, CustomFieldDtoDict


class ListTransactionCustomFieldResponseDto(SdkBaseModel):
    """Transaction custom field response list."""

    results: Optional[list[CustomFieldDto]] = UNSET
    """Results"""


class ListTransactionCustomFieldResponseDtoDict(TypedDict):
    results: NotRequired[list[CustomFieldDtoDict]]

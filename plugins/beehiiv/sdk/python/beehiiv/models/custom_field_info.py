from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.custom_field_type import CustomFieldTypeOrStr


class CustomFieldInfo(SdkBaseModel):
    id: Optional[str] = UNSET
    kind: Optional[CustomFieldTypeOrStr] = UNSET
    """The type of value being stored in the custom field."""

    display: Optional[str] = UNSET
    created: Optional[int] = UNSET
    options: Optional[list[str]] = UNSET
    """Array of option values. Only included when kind is "list"."""


class CustomFieldInfoDict(TypedDict):
    id: NotRequired[str]
    kind: NotRequired[CustomFieldTypeOrStr]
    display: NotRequired[str]
    created: NotRequired[int]
    options: NotRequired[list[str]]

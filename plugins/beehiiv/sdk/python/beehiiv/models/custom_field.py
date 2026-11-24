from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.custom_field_type import CustomFieldTypeOrStr
from .unions.custom_field_data_type import CustomFieldDataType, CustomFieldDataTypeDict


class CustomField(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the existing custom field"""

    kind: Optional[CustomFieldTypeOrStr] = UNSET
    """The type of value being stored in the custom field."""

    value: Optional[CustomFieldDataType] = UNSET
    """The value stored for the subscription"""


class CustomFieldDict(TypedDict):
    name: NotRequired[str]
    kind: NotRequired[CustomFieldTypeOrStr]
    value: NotRequired[CustomFieldDataTypeDict]

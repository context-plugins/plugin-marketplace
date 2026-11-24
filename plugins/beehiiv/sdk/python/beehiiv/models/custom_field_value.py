from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.custom_field_data_type1 import CustomFieldDataType1, CustomFieldDataType1Dict


class CustomFieldValue(SdkBaseModel):
    """The object required for setting custom field values on a subscription"""

    name: Optional[str] = UNSET
    """The name of the existing custom field"""

    value: Optional[CustomFieldDataType1] = UNSET
    """The value stored for the subscription"""


class CustomFieldValueDict(TypedDict):
    name: NotRequired[str]
    value: NotRequired[CustomFieldDataType1Dict]

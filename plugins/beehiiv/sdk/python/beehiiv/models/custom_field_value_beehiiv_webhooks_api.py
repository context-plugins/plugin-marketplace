from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.custom_field_kind import CustomFieldKindOrStr


class CustomFieldValueBeehiivWebhooksApi(SdkBaseModel):
    name: str
    """The display name of the custom field."""

    kind: CustomFieldKindOrStr
    """The type of the custom field."""

    value: Optional[str] = UNSET
    """The formatted value of the custom field. The actual JSON type depends on the kind: - string: the value as a
    string - integer, number: the value as a number (JSON number type) - boolean: true or false (JSON boolean type) -
    date: formatted date string (e.g., "Jan 15, 2024") - datetime: formatted date and time string (e.g., "Jan 15, 2024
    3:45 PM") - list: comma-separated values as a string"""


class CustomFieldValueBeehiivWebhooksApiDict(TypedDict):
    name: str
    kind: CustomFieldKindOrStr
    value: NotRequired[str]

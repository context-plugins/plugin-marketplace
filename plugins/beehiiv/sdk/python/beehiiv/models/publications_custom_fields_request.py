from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.custom_field_type import CustomFieldTypeOrStr


class PublicationsCustomFieldsRequest(SdkBaseModel):
    kind: CustomFieldTypeOrStr
    """The type of value being stored in the custom field."""

    display: str


class PublicationsCustomFieldsRequestDict(TypedDict):
    kind: CustomFieldTypeOrStr
    display: str

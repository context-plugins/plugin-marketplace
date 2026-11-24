from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteCustomFieldValuesRequestDto(SdkBaseModel):
    """Delete custom field values request"""

    custom_field_value_ids: list[str] = Field(alias="customFieldValueIds")
    """List of custom field value IDs or UUIDs"""


class DeleteCustomFieldValuesRequestDtoDict(TypedDict):
    custom_field_value_ids: list[str]

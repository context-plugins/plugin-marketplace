from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CreateCustomFieldValueRequestDto(SdkBaseModel):
    """Create a custom field value (value added to existing list)"""

    values: list[str]
    """List of custom field values"""


class CreateCustomFieldValueRequestDtoDict(TypedDict):
    values: list[str]

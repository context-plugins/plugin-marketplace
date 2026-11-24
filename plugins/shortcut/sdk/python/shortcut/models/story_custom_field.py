from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StoryCustomField(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    field_id: UUID
    """The unique public ID for a CustomField."""

    value_id: UUID
    """The unique public ID for a CustomFieldEnumValue."""

    value: str
    """A string representation of the value, if applicable."""


class StoryCustomFieldDict(TypedDict):
    field_id: UUID
    value_id: UUID
    value: str

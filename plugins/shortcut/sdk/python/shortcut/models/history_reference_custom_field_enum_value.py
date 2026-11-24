from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.id import Id, IdDict


class HistoryReferenceCustomFieldEnumValue(SdkBaseModel):
    """A reference to a CustomField value asserted on a Story."""

    model_config = ConfigDict(extra="forbid")

    id: Id
    """The ID of the entity referenced."""

    entity_type: str
    """The type of entity referenced."""

    string_value: str | None
    """The custom-field enum value as a string."""

    enum_value_enabled: bool | None
    """Whether or not the custom-field enum value is enabled."""

    field_id: UUID
    """The public-id of the parent custom-field of this enum value."""

    field_type: str
    """The type variety of the parent custom-field of this enum value."""

    field_name: str
    """The name as it is displayed to the user of the parent custom-field of this enum value."""

    field_enabled: bool
    """Whether or not the custom-field is enabled."""


class HistoryReferenceCustomFieldEnumValueDict(TypedDict):
    id: IdDict
    entity_type: str
    string_value: str | None
    enum_value_enabled: bool | None
    field_id: UUID
    field_type: str
    field_name: str
    field_enabled: bool

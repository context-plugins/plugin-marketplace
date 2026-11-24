from __future__ import annotations

from typing import Literal
from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CustomFieldEnumValue(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: UUID
    """The unique public ID for the Custom Field."""

    value: str
    """A string value within the domain of this Custom Field."""

    position: int
    """An integer indicating the position of this Value with respect to the other CustomFieldEnumValues in the
    enumeration."""

    color_key: str | None
    """A color key associated with this CustomFieldEnumValue."""

    entity_type: Literal["custom-field-enum-value"] = "custom-field-enum-value"
    """A string description of this resource."""

    enabled: bool
    """When true, the CustomFieldEnumValue can be selected for the CustomField."""


class CustomFieldEnumValueDict(TypedDict):
    id: UUID
    value: str
    position: int
    color_key: str | None
    entity_type: Literal["custom-field-enum-value"]
    enabled: bool

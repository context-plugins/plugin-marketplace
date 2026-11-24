from __future__ import annotations

from typing import Literal
from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .custom_field_enum_value import CustomFieldEnumValue, CustomFieldEnumValueDict


class CustomField(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    description: Optional[str] = UNSET
    """A string description of the CustomField"""

    icon_set_identifier: Optional[str] = UNSET
    """A string that represents the icon that corresponds to this custom field."""

    entity_type: Literal["custom-field"] = "custom-field"
    """A string description of this resource."""

    story_types: Optional[list[str]] = UNSET
    """The types of stories this CustomField is scoped to."""

    name: str
    """The name of the Custom Field."""

    fixed_position: Optional[bool] = UNSET
    """When true, the CustomFieldEnumValues may not be reordered."""

    updated_at: RFC3339DateTime
    """The instant when this CustomField was last updated."""

    id: UUID
    """The unique public ID for the CustomField."""

    values: Optional[list[CustomFieldEnumValue]] = UNSET
    """A collection of legal values for a CustomField."""

    field_type: Literal["enum"] = "enum"
    """The type of Custom Field, eg. 'enum'."""

    position: int
    """An integer indicating the position of this Custom Field with respect to the other CustomField"""

    canonical_name: Optional[str] = UNSET
    """The canonical name for a Shortcut-defined field."""

    enabled: bool
    """When true, the CustomField can be applied to entities in the Workspace."""

    created_at: RFC3339DateTime
    """The instant when this CustomField was created."""


class CustomFieldDict(TypedDict):
    description: NotRequired[str]
    icon_set_identifier: NotRequired[str]
    entity_type: Literal["custom-field"]
    story_types: NotRequired[list[str]]
    name: str
    fixed_position: NotRequired[bool]
    updated_at: RFC3339DateTime
    id: UUID
    values: NotRequired[list[CustomFieldEnumValueDict]]
    field_type: Literal["enum"]
    position: int
    canonical_name: NotRequired[str]
    enabled: bool
    created_at: RFC3339DateTime

from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .update_custom_field_enum_value import UpdateCustomFieldEnumValue, UpdateCustomFieldEnumValueDict


class UpdateCustomField(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    enabled: Optional[bool] = UNSET
    """Indicates whether the Field is enabled for the Workspace. Only enabled fields can be applied to Stories."""

    name: Optional[str] = UNSET
    """A collection of objects representing reporting periods for years."""

    values: Optional[list[UpdateCustomFieldEnumValue]] = UNSET
    """A collection of EnumValue objects representing the values in the domain of some Custom Field."""

    icon_set_identifier: Optional[str] = UNSET
    """A frontend-controlled string that represents the icon for this custom field."""

    description: Optional[str] = UNSET
    """A description of the purpose of this field."""

    before_id: Optional[UUID] = UNSET
    """The ID of the CustomField we want to move this CustomField before."""

    after_id: Optional[UUID] = UNSET
    """The ID of the CustomField we want to move this CustomField after."""


class UpdateCustomFieldDict(TypedDict):
    enabled: NotRequired[bool]
    name: NotRequired[str]
    values: NotRequired[list[UpdateCustomFieldEnumValueDict]]
    icon_set_identifier: NotRequired[str]
    description: NotRequired[str]
    before_id: NotRequired[UUID]
    after_id: NotRequired[UUID]

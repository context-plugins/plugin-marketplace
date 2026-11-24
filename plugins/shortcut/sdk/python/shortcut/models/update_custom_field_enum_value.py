from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.color_key import ColorKeyOrStr


class UpdateCustomFieldEnumValue(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: Optional[UUID] = UNSET
    """The unique ID of an existing EnumValue within the CustomField's domain."""

    value: Optional[str] = UNSET
    """A string value within the domain of this Custom Field."""

    color_key: OptionalNullable[ColorKeyOrStr] = UNSET
    """A color key associated with this EnumValue within the CustomField's domain."""

    enabled: Optional[bool] = UNSET
    """Whether this EnumValue is enabled for its CustomField or not. Leaving this key out of the request leaves the
    current enabled state untouched."""


class UpdateCustomFieldEnumValueDict(TypedDict):
    id: NotRequired[UUID]
    value: NotRequired[str]
    color_key: NotRequired[ColorKeyOrStr | None]
    enabled: NotRequired[bool]

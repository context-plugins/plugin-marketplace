from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Metafield(SdkBaseModel):
    """One field in an Object type's content model."""

    id: Optional[str] = UNSET
    """Assigned by Cosmic. Omit when creating."""

    title: str
    """Label shown to editors in the dashboard."""

    key: str
    """The key used in an Object's ``metadata``."""

    type_: str = Field(alias="type")
    """The Metafield type. See the Metafields documentation for the full list and the value shape each one expects."""

    value: Optional[Any] = UNSET
    """Default value for the Metafield."""

    helptext: Optional[str] = UNSET
    """Guidance shown to editors beneath the field."""

    required: Optional[bool] = UNSET
    """Whether Objects in this type must supply a value."""

    media_validation_type: Optional[str] = UNSET
    """Restricts uploads for File Metafields."""

    repeater_fields: Optional[list[Metafield]] = UNSET
    """Child Metafields, for ``repeater`` types."""

    options: Optional[list[Any]] = UNSET
    """Choices for select, radio, and checkbox types."""


class MetafieldDict(TypedDict):
    id: NotRequired[str]
    title: str
    key: str
    type_: str
    value: NotRequired[Any]
    helptext: NotRequired[str]
    required: NotRequired[bool]
    media_validation_type: NotRequired[str]
    repeater_fields: NotRequired[list[MetafieldDict]]
    options: NotRequired[list[Any]]

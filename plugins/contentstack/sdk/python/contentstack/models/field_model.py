from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FieldModel(SdkBaseModel):
    """A field definition within a content type schema."""

    uid: Optional[str] = UNSET
    """Unique identifier of the field within the content type."""

    data_type: Optional[str] = UNSET
    """The data type of the field. Common values: text, number, boolean, date, file, link, json, reference,
    global_field, group, blocks."""

    display_name: Optional[str] = UNSET
    """Human-readable label for the field."""

    mandatory: Optional[bool] = UNSET
    """Indicates whether the field is required for entry creation."""

    unique: Optional[bool] = UNSET
    """Indicates whether field values must be unique across entries."""


class FieldModelDict(TypedDict):
    uid: NotRequired[str]
    data_type: NotRequired[str]
    display_name: NotRequired[str]
    mandatory: NotRequired[bool]
    unique: NotRequired[bool]

from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Field2(SdkBaseModel):
    """A field definition within a content type schema."""

    uid: Optional[str] = UNSET
    """Unique identifier of the field."""

    data_type: Optional[str] = UNSET
    """Data type of the field (e.g., text, number, boolean, date, file, reference)."""

    display_name: Optional[str] = UNSET
    """Human-readable label for the field."""

    mandatory: Optional[bool] = UNSET
    """Indicates whether the field is required."""

    unique: Optional[bool] = UNSET
    """Indicates whether field values must be unique."""


class Field2Dict(TypedDict):
    uid: NotRequired[str]
    data_type: NotRequired[str]
    display_name: NotRequired[str]
    mandatory: NotRequired[bool]
    unique: NotRequired[bool]

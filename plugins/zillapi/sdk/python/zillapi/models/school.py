from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class School(SdkBaseModel):
    name: Optional[str] = UNSET
    rating: OptionalNullable[int] = UNSET
    """GreatSchools rating (1–10)."""

    distance: OptionalNullable[float] = UNSET
    """Distance in miles."""

    type_: OptionalNullable[str] = Field(default=UNSET, alias="type")
    """e.g. public, private, charter."""

    level: OptionalNullable[str] = UNSET
    """e.g. Elementary, Middle, High."""


class SchoolDict(TypedDict):
    name: NotRequired[str]
    rating: NotRequired[int | None]
    distance: NotRequired[float | None]
    type_: NotRequired[str | None]
    level: NotRequired[str | None]

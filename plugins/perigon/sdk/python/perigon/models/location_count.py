from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class LocationCount(SdkBaseModel):
    """Locations associated with the story and their article counts."""

    country: OptionalNullable[str] = UNSET
    """Country associated with the story."""

    state: OptionalNullable[str] = UNSET
    """State or region associated with the story."""

    county: OptionalNullable[str] = UNSET
    """County associated with the story."""

    city: OptionalNullable[str] = UNSET
    """City associated with the story."""

    area: OptionalNullable[str] = UNSET
    """Neighborhood, borough, or district associated with the story."""

    count: OptionalNullable[int] = UNSET
    """Number of story articles associated with the location."""


class LocationCountDict(TypedDict):
    country: NotRequired[str | None]
    state: NotRequired[str | None]
    county: NotRequired[str | None]
    city: NotRequired[str | None]
    area: NotRequired[str | None]
    count: NotRequired[int | None]

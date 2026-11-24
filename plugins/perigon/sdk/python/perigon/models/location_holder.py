from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class LocationHolder(SdkBaseModel):
    """Locations most strongly associated with the story."""

    country: OptionalNullable[str] = UNSET
    """Country central to the article."""

    state: OptionalNullable[str] = UNSET
    """State or region central to the article."""

    county: OptionalNullable[str] = UNSET
    """County central to the article."""

    city: OptionalNullable[str] = UNSET
    """City central to the article."""

    area: OptionalNullable[str] = UNSET
    """Neighborhood, borough, or district central to the article."""


class LocationHolderDict(TypedDict):
    country: NotRequired[str | None]
    state: NotRequired[str | None]
    county: NotRequired[str | None]
    city: NotRequired[str | None]
    area: NotRequired[str | None]

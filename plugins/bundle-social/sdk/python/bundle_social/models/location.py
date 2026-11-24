from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Location(SdkBaseModel):
    """Physical location metadata"""

    city: OptionalNullable[str] = UNSET
    country: OptionalNullable[str] = UNSET
    latitude: OptionalNullable[float] = UNSET
    longitude: OptionalNullable[float] = UNSET
    state: OptionalNullable[str] = UNSET
    street: OptionalNullable[str] = UNSET
    zip: OptionalNullable[str] = UNSET


class LocationDict(TypedDict):
    city: NotRequired[str | None]
    country: NotRequired[str | None]
    latitude: NotRequired[float | None]
    longitude: NotRequired[float | None]
    state: NotRequired[str | None]
    street: NotRequired[str | None]
    zip: NotRequired[str | None]

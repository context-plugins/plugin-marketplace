from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class NameCount(SdkBaseModel):
    """Countries most frequently associated with the journalist's articles."""

    name: OptionalNullable[str] = UNSET
    """Name of the aggregated value."""

    count: OptionalNullable[int] = UNSET
    """Number of matching records for the value."""


class NameCountDict(TypedDict):
    name: NotRequired[str | None]
    count: NotRequired[int | None]

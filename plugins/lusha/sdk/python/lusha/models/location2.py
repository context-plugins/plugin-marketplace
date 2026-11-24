from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Location2(SdkBaseModel):
    country: str | None
    state: str | None
    city: str | None


class Location2Dict(TypedDict):
    country: str | None
    state: str | None
    city: str | None

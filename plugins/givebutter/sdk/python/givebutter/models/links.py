from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Links(SdkBaseModel):
    first: str | None
    last: str | None
    prev: str | None
    next: str | None


class LinksDict(TypedDict):
    first: str | None
    last: str | None
    prev: str | None
    next: str | None

from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Sport(SdkBaseModel):
    key: str
    group: str
    title: str
    description: str
    active: bool
    has_outrights: bool
    regions: list[str]
    markets: list[str]
    """Market keys seen under it on the matched boards."""


class SportDict(TypedDict):
    key: str
    group: str
    title: str
    description: str
    active: bool
    has_outrights: bool
    regions: list[str]
    markets: list[str]

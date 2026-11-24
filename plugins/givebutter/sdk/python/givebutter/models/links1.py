from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Links1(SdkBaseModel):
    url: str | None
    label: str
    active: bool


class Links1Dict(TypedDict):
    url: str | None
    label: str
    active: bool

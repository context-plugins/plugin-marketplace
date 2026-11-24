from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Option(SdkBaseModel):
    label: str
    value: str


class OptionDict(TypedDict):
    label: str
    value: str

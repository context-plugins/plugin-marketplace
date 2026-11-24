from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Phone(SdkBaseModel):
    number: str
    is_premium: bool


class PhoneDict(TypedDict):
    number: str
    is_premium: bool

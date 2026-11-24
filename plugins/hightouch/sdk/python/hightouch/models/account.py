from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Account(SdkBaseModel):
    id: str


class AccountDict(TypedDict):
    id: str

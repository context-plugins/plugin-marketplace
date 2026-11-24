from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Customer(SdkBaseModel):
    id: str
    name: str
    email: str
    avatar: str


class CustomerDict(TypedDict):
    id: str
    name: str
    email: str
    avatar: str

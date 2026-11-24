from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GivingSpaceResource(SdkBaseModel):
    id: str
    name: str
    amount: float
    message: str
    created_at: str
    updated_at: str


class GivingSpaceResourceDict(TypedDict):
    id: str
    name: str
    amount: float
    message: str
    created_at: str
    updated_at: str

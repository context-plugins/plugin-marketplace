from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class FundResource(SdkBaseModel):
    id: str | None
    code: str | None
    name: str
    raised: float
    supporters: int
    created_at: str
    updated_at: str


class FundResourceDict(TypedDict):
    id: str | None
    code: str | None
    name: str
    raised: float
    supporters: int
    created_at: str
    updated_at: str

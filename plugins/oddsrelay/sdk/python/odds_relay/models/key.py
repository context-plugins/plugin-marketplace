from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.kind import KindOrStr


class Key(SdkBaseModel):
    id: str
    kind: KindOrStr
    products: list[str]
    regions: list[str]
    token_cap: str | None
    tokens_used: str | None


class KeyDict(TypedDict):
    id: str
    kind: KindOrStr
    products: list[str]
    regions: list[str]
    token_cap: str | None
    tokens_used: str | None

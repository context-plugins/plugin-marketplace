from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Comments(SdkBaseModel):
    used: float
    limit: float
    remaining: float


class CommentsDict(TypedDict):
    used: float
    limit: float
    remaining: float

from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Posts(SdkBaseModel):
    used: float
    limit: float
    remaining: float


class PostsDict(TypedDict):
    used: float
    limit: float
    remaining: float

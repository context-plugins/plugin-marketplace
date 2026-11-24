from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ChainHead(SdkBaseModel):
    """The audit chain head the pack recorded when it was taken."""

    seq: int
    hash: str
    at: str


class ChainHeadDict(TypedDict):
    seq: int
    hash: str
    at: str

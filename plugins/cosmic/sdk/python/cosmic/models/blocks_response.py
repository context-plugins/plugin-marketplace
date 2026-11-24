from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BlocksResponse(SdkBaseModel):
    blocks: list[Any]
    """The Bucket's content Blocks. Empty when none are configured."""


class BlocksResponseDict(TypedDict):
    blocks: list[Any]

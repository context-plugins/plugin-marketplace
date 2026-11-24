from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PostProcessingData(SdkBaseModel):
    id: str
    """The prefixed post id. Stable — this is the id the post will have once created."""

    state: Literal["pending"] = "pending"
    """The background creation state of the post."""


class PostProcessingDataDict(TypedDict):
    id: str
    state: Literal["pending"]

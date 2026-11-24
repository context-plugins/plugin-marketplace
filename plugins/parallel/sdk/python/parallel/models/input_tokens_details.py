from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class InputTokensDetails(SdkBaseModel):
    """A detailed breakdown of the input tokens."""

    cached_tokens: int


class InputTokensDetailsDict(TypedDict):
    cached_tokens: int

from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class OutputTokensDetails(SdkBaseModel):
    """A detailed breakdown of the output tokens."""

    reasoning_tokens: int


class OutputTokensDetailsDict(TypedDict):
    reasoning_tokens: int

from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PromptTokensDetails(SdkBaseModel):
    """Breakdown of tokens used in the prompt."""

    audio_tokens: Optional[int] = UNSET
    cached_tokens: Optional[int] = UNSET


class PromptTokensDetailsDict(TypedDict):
    audio_tokens: NotRequired[int]
    cached_tokens: NotRequired[int]

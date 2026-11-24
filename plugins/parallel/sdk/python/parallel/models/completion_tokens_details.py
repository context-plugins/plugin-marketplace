from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompletionTokensDetails(SdkBaseModel):
    """Breakdown of tokens used in a completion."""

    accepted_prediction_tokens: Optional[int] = UNSET
    audio_tokens: Optional[int] = UNSET
    reasoning_tokens: Optional[int] = UNSET
    rejected_prediction_tokens: Optional[int] = UNSET


class CompletionTokensDetailsDict(TypedDict):
    accepted_prediction_tokens: NotRequired[int]
    audio_tokens: NotRequired[int]
    reasoning_tokens: NotRequired[int]
    rejected_prediction_tokens: NotRequired[int]

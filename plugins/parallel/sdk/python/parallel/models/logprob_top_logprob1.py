from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LogprobTopLogprob1(SdkBaseModel):
    token: Optional[str] = UNSET
    logprob: Optional[float] = UNSET


class LogprobTopLogprob1Dict(TypedDict):
    token: NotRequired[str]
    logprob: NotRequired[float]

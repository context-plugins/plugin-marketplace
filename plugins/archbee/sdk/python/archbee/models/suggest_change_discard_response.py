from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SuggestChangeDiscardResponse(SdkBaseModel):
    status: Optional[str] = UNSET


class SuggestChangeDiscardResponseDict(TypedDict):
    status: NotRequired[str]

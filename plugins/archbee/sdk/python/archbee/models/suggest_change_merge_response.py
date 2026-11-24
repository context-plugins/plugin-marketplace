from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SuggestChangeMergeResponse(SdkBaseModel):
    status: Optional[str] = UNSET


class SuggestChangeMergeResponseDict(TypedDict):
    status: NotRequired[str]

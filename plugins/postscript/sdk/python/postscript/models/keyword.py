from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Keyword(SdkBaseModel):
    created_at: Optional[str] = UNSET
    id: Optional[str] = UNSET
    keyword: Optional[str] = UNSET
    triggered_count: int = 0
    updated_at: Optional[str] = UNSET


class KeywordDict(TypedDict):
    created_at: NotRequired[str]
    id: NotRequired[str]
    keyword: NotRequired[str]
    triggered_count: NotRequired[int]
    updated_at: NotRequired[str]

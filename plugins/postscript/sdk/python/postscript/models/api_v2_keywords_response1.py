from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .keyword import Keyword, KeywordDict


class ApiV2KeywordsResponse1(SdkBaseModel):
    keywords: Optional[list[Keyword]] = UNSET


class ApiV2KeywordsResponse1Dict(TypedDict):
    keywords: NotRequired[list[KeywordDict]]

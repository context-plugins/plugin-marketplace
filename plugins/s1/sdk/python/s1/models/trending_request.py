from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TrendingRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    search_service: str
    max_results: Optional[int] = UNSET


class TrendingRequestDict(TypedDict):
    search_service: str
    max_results: NotRequired[int]

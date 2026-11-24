from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PageInfo(SdkBaseModel):
    total_results: Optional[int] = Field(default=UNSET, alias="totalResults")
    results_per_page: Optional[int] = Field(default=UNSET, alias="resultsPerPage")


class PageInfoDict(TypedDict):
    total_results: NotRequired[int]
    results_per_page: NotRequired[int]

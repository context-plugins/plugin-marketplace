from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .what_if_analysis_summary import WhatIfAnalysisSummary, WhatIfAnalysisSummaryDict


class ListWhatIfAnalysesResponse(SdkBaseModel):
    what_if_analyses: Optional[list[WhatIfAnalysisSummary]] = Field(default=UNSET, alias="WhatIfAnalyses")
    """An array of WhatIfAnalysisSummary objects that describe the matched analyses."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the response is truncated, Forecast returns this token. To retrieve the next set of results, use the token in
    the next request."""


class ListWhatIfAnalysesResponseDict(TypedDict):
    what_if_analyses: NotRequired[list[WhatIfAnalysisSummaryDict]]
    next_token: NotRequired[str]

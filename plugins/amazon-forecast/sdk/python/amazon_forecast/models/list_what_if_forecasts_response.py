from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .what_if_forecast_summary import WhatIfForecastSummary, WhatIfForecastSummaryDict


class ListWhatIfForecastsResponse(SdkBaseModel):
    what_if_forecasts: Optional[list[WhatIfForecastSummary]] = Field(default=UNSET, alias="WhatIfForecasts")
    """An array of WhatIfForecasts objects that describe the matched forecasts."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the result of the previous request was truncated, the response includes a NextToken. To retrieve the next set
    of results, use the token in the next request. Tokens expire after 24 hours."""


class ListWhatIfForecastsResponseDict(TypedDict):
    what_if_forecasts: NotRequired[list[WhatIfForecastSummaryDict]]
    next_token: NotRequired[str]

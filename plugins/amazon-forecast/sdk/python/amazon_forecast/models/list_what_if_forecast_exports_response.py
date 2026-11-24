from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .what_if_forecast_export_summary import WhatIfForecastExportSummary, WhatIfForecastExportSummaryDict


class ListWhatIfForecastExportsResponse(SdkBaseModel):
    what_if_forecast_exports: Optional[list[WhatIfForecastExportSummary]] = Field(
        default=UNSET, alias="WhatIfForecastExports"
    )
    """An array of WhatIfForecastExports objects that describe the matched forecast exports."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the response is truncated, Forecast returns this token. To retrieve the next set of results, use the token in
    the next request."""


class ListWhatIfForecastExportsResponseDict(TypedDict):
    what_if_forecast_exports: NotRequired[list[WhatIfForecastExportSummaryDict]]
    next_token: NotRequired[str]

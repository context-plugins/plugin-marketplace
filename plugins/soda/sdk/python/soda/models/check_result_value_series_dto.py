from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .check_result_value_series_dto_value_series_value import (
    CheckResultValueSeriesDtoValueSeriesValue,
    CheckResultValueSeriesDtoValueSeriesValueDict,
)


class CheckResultValueSeriesDto(SdkBaseModel):
    values: Optional[list[CheckResultValueSeriesDtoValueSeriesValue]] = UNSET


class CheckResultValueSeriesDtoDict(TypedDict):
    values: NotRequired[list[CheckResultValueSeriesDtoValueSeriesValueDict]]

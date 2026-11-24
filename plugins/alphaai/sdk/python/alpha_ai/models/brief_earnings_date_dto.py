from __future__ import annotations

from typing_extensions import TypedDict

from ..core import Date, SdkBaseModel


class BriefEarningsDateDto(SdkBaseModel):
    ticker: str
    report_date: Date


class BriefEarningsDateDtoDict(TypedDict):
    ticker: str
    report_date: Date

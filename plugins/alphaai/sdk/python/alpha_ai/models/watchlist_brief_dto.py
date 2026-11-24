from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .brief_earnings_date_dto import BriefEarningsDateDto, BriefEarningsDateDtoDict
from .brief_event_dto import BriefEventDto, BriefEventDtoDict


class WatchlistBriefDto(SdkBaseModel):
    generated_at: RFC3339DateTime
    window_start: RFC3339DateTime
    window_end: RFC3339DateTime
    hours: int
    tickers: list[str]
    unknown_tickers: list[str]
    events: list[BriefEventDto]
    filings: list[BriefEventDto]
    upcoming_earnings: list[BriefEarningsDateDto]
    events_truncated: bool = False
    filings_truncated: bool = False


class WatchlistBriefDtoDict(TypedDict):
    generated_at: RFC3339DateTime
    window_start: RFC3339DateTime
    window_end: RFC3339DateTime
    hours: int
    tickers: list[str]
    unknown_tickers: list[str]
    events: list[BriefEventDtoDict]
    filings: list[BriefEventDtoDict]
    upcoming_earnings: list[BriefEarningsDateDtoDict]
    events_truncated: NotRequired[bool]
    filings_truncated: NotRequired[bool]

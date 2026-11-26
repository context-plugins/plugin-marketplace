from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetApiSymbolsByTickerSentimentSummaryErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetApiSymbolsByTickerSentimentSummaryError:
    def map(self, status_code: int, content: bytes) -> GetApiSymbolsByTickerSentimentSummaryErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case 401 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_api_symbols_by_ticker_sentiment_summary_error_mapper: Final[
    ErrorMapper[GetApiSymbolsByTickerSentimentSummaryErrorBody]
] = _GetApiSymbolsByTickerSentimentSummaryError()

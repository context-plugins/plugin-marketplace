from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetApiSymbolsByTickerEarningsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetApiSymbolsByTickerEarningsError:
    def map(self, status_code: int, content: bytes) -> GetApiSymbolsByTickerEarningsErrorBody:
        match status_code:
            case 400 | 404:
                return RawError(status_code, content)
            case 401 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_api_symbols_by_ticker_earnings_error_mapper: Final[
    ErrorMapper[GetApiSymbolsByTickerEarningsErrorBody]
] = _GetApiSymbolsByTickerEarningsError()

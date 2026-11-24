from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetApiSymbolsByTickerErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetApiSymbolsByTickerError:
    def map(self, status_code: int, content: bytes) -> GetApiSymbolsByTickerErrorBody:
        match status_code:
            case 401 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_api_symbols_by_ticker_error_mapper: Final[
    ErrorMapper[GetApiSymbolsByTickerErrorBody]
] = _GetApiSymbolsByTickerError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetApiSymbolsByTickerPeersErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetApiSymbolsByTickerPeersError:
    def map(self, status_code: int, content: bytes) -> GetApiSymbolsByTickerPeersErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case 401 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_api_symbols_by_ticker_peers_error_mapper: Final[
    ErrorMapper[GetApiSymbolsByTickerPeersErrorBody]
] = _GetApiSymbolsByTickerPeersError()

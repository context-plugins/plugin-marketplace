from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error400_odds_relay_service_api import Error400OddsRelayServiceApi
from ..models.error429_odds_relay_service_api import Error429OddsRelayServiceApi
from ..models.error500_odds_relay_service_api import Error500OddsRelayServiceApi

GetOpenApiErrorBody: TypeAlias = (
    Error400OddsRelayServiceApi | Error429OddsRelayServiceApi | Error500OddsRelayServiceApi | RawError
)


@dataclass(frozen=True, slots=True)
class _GetOpenApiError:
    def map(self, status_code: int, content: bytes) -> GetOpenApiErrorBody:
        match status_code:
            case 400:
                return decode_json[Error400OddsRelayServiceApi](content)
            case 429:
                return decode_json[Error429OddsRelayServiceApi](content)
            case 500:
                return decode_json[Error500OddsRelayServiceApi](content)
            case 502:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_open_api_error_mapper: Final[ErrorMapper[GetOpenApiErrorBody]] = _GetOpenApiError()

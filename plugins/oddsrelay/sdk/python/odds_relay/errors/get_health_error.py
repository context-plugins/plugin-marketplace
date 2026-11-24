from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error400_odds_relay_service_api import Error400OddsRelayServiceApi
from ..models.error401_odds_relay_service_api import Error401OddsRelayServiceApi
from ..models.error403_odds_relay_service_api import Error403OddsRelayServiceApi
from ..models.error429_odds_relay_service_api import Error429OddsRelayServiceApi
from ..models.error500_odds_relay_service_api import Error500OddsRelayServiceApi
from ..models.error503_odds_relay_service_api import Error503OddsRelayServiceApi

GetHealthErrorBody: TypeAlias = (
    Error400OddsRelayServiceApi
    | Error401OddsRelayServiceApi
    | Error403OddsRelayServiceApi
    | Error429OddsRelayServiceApi
    | Error500OddsRelayServiceApi
    | Error503OddsRelayServiceApi
    | RawError
)


@dataclass(frozen=True, slots=True)
class _GetHealthError:
    def map(self, status_code: int, content: bytes) -> GetHealthErrorBody:
        match status_code:
            case 400:
                return decode_json[Error400OddsRelayServiceApi](content)
            case 401:
                return decode_json[Error401OddsRelayServiceApi](content)
            case 403:
                return decode_json[Error403OddsRelayServiceApi](content)
            case 429:
                return decode_json[Error429OddsRelayServiceApi](content)
            case 500:
                return decode_json[Error500OddsRelayServiceApi](content)
            case 502:
                return RawError(status_code, content)
            case 503:
                return decode_json[Error503OddsRelayServiceApi](content)
            case _:
                return RawError(status_code, content)


get_health_error_mapper: Final[ErrorMapper[GetHealthErrorBody]] = _GetHealthError()

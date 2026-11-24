from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error400_odds_relay_discovery_api import Error400OddsRelayDiscoveryApi
from ..models.error401_odds_relay_discovery_api import Error401OddsRelayDiscoveryApi
from ..models.error402 import Error402
from ..models.error403_odds_relay_discovery_api import Error403OddsRelayDiscoveryApi
from ..models.error404 import Error404
from ..models.error429_odds_relay_discovery_api import Error429OddsRelayDiscoveryApi
from ..models.error500_odds_relay_discovery_api import Error500OddsRelayDiscoveryApi
from ..models.error503_odds_relay_discovery_api import Error503OddsRelayDiscoveryApi

GetRawBoardErrorBody: TypeAlias = (
    Error400OddsRelayDiscoveryApi
    | Error401OddsRelayDiscoveryApi
    | Error402
    | Error403OddsRelayDiscoveryApi
    | Error404
    | Error429OddsRelayDiscoveryApi
    | Error500OddsRelayDiscoveryApi
    | Error503OddsRelayDiscoveryApi
    | RawError
)


@dataclass(frozen=True, slots=True)
class _GetRawBoardError:
    def map(self, status_code: int, content: bytes) -> GetRawBoardErrorBody:
        match status_code:
            case 400:
                return decode_json[Error400OddsRelayDiscoveryApi](content)
            case 401:
                return decode_json[Error401OddsRelayDiscoveryApi](content)
            case 402:
                return decode_json[Error402](content)
            case 403:
                return decode_json[Error403OddsRelayDiscoveryApi](content)
            case 404:
                return decode_json[Error404](content)
            case 429:
                return decode_json[Error429OddsRelayDiscoveryApi](content)
            case 500:
                return decode_json[Error500OddsRelayDiscoveryApi](content)
            case 502:
                return RawError(status_code, content)
            case 503:
                return decode_json[Error503OddsRelayDiscoveryApi](content)
            case _:
                return RawError(status_code, content)


get_raw_board_error_mapper: Final[ErrorMapper[GetRawBoardErrorBody]] = _GetRawBoardError()

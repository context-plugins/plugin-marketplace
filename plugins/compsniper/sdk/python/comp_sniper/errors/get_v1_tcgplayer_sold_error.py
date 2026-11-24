from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.v1_tcgplayer_sold400_error1 import V1TcgplayerSold400Error1
from ..models.v1_tcgplayer_sold401_error1 import V1TcgplayerSold401Error1
from ..models.v1_tcgplayer_sold429_error1 import V1TcgplayerSold429Error1
from ..models.v1_tcgplayer_sold502_error1 import V1TcgplayerSold502Error1
from ..models.v1_tcgplayer_sold503_error1 import V1TcgplayerSold503Error1

GetV1TcgplayerSoldErrorBody: TypeAlias = (
    V1TcgplayerSold400Error1
    | V1TcgplayerSold401Error1
    | V1TcgplayerSold429Error1
    | V1TcgplayerSold502Error1
    | V1TcgplayerSold503Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _GetV1TcgplayerSoldError:
    def map(self, status_code: int, content: bytes) -> GetV1TcgplayerSoldErrorBody:
        match status_code:
            case 400:
                return decode_json[V1TcgplayerSold400Error1](content)
            case 401:
                return decode_json[V1TcgplayerSold401Error1](content)
            case 429:
                return decode_json[V1TcgplayerSold429Error1](content)
            case 502:
                return decode_json[V1TcgplayerSold502Error1](content)
            case 503:
                return decode_json[V1TcgplayerSold503Error1](content)
            case _:
                return RawError(status_code, content)


get_v1_tcgplayer_sold_error_mapper: Final[ErrorMapper[GetV1TcgplayerSoldErrorBody]] = _GetV1TcgplayerSoldError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.v1_tcgplayer_listings400_error1 import V1TcgplayerListings400Error1
from ..models.v1_tcgplayer_listings401_error1 import V1TcgplayerListings401Error1
from ..models.v1_tcgplayer_listings429_error1 import V1TcgplayerListings429Error1
from ..models.v1_tcgplayer_listings502_error1 import V1TcgplayerListings502Error1
from ..models.v1_tcgplayer_listings503_error1 import V1TcgplayerListings503Error1

GetV1TcgplayerListingsErrorBody: TypeAlias = (
    V1TcgplayerListings400Error1
    | V1TcgplayerListings401Error1
    | V1TcgplayerListings429Error1
    | V1TcgplayerListings502Error1
    | V1TcgplayerListings503Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _GetV1TcgplayerListingsError:
    def map(self, status_code: int, content: bytes) -> GetV1TcgplayerListingsErrorBody:
        match status_code:
            case 400:
                return decode_json[V1TcgplayerListings400Error1](content)
            case 401:
                return decode_json[V1TcgplayerListings401Error1](content)
            case 429:
                return decode_json[V1TcgplayerListings429Error1](content)
            case 502:
                return decode_json[V1TcgplayerListings502Error1](content)
            case 503:
                return decode_json[V1TcgplayerListings503Error1](content)
            case _:
                return RawError(status_code, content)


get_v1_tcgplayer_listings_error_mapper: Final[
    ErrorMapper[GetV1TcgplayerListingsErrorBody]
] = _GetV1TcgplayerListingsError()

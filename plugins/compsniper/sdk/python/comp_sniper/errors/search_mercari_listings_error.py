from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel
from ..models.unions.v1_mercari_response12 import V1MercariResponse12
from ..models.v1_mercari400_error1 import V1Mercari400Error1
from ..models.v1_mercari401_error1 import V1Mercari401Error1
from ..models.v1_mercari500_error1 import V1Mercari500Error1
from ..models.v1_mercari502_error1 import V1Mercari502Error1

SearchMercariListingsErrorBody: TypeAlias = (
    V1Mercari400Error1
    | V1Mercari401Error1
    | V1MercariResponse12
    | V1Mercari500Error1
    | V1Mercari502Error1
    | ApiErrorModel
    | RawError
)


@dataclass(frozen=True, slots=True)
class _SearchMercariListingsError:
    def map(self, status_code: int, content: bytes) -> SearchMercariListingsErrorBody:
        match status_code:
            case 400:
                return decode_json[V1Mercari400Error1](content)
            case 401:
                return decode_json[V1Mercari401Error1](content)
            case 429:
                return decode_json[V1MercariResponse12](content)
            case 500:
                return decode_json[V1Mercari500Error1](content)
            case 502:
                return decode_json[V1Mercari502Error1](content)
            case 503:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


search_mercari_listings_error_mapper: Final[ErrorMapper[SearchMercariListingsErrorBody]] = _SearchMercariListingsError()

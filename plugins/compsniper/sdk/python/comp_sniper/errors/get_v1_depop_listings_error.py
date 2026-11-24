from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.v1_depop_listings400_error1 import V1DepopListings400Error1
from ..models.v1_depop_listings401_error1 import V1DepopListings401Error1
from ..models.v1_depop_listings429_error1 import V1DepopListings429Error1
from ..models.v1_depop_listings502_error1 import V1DepopListings502Error1
from ..models.v1_depop_listings503_error1 import V1DepopListings503Error1

GetV1DepopListingsErrorBody: TypeAlias = (
    V1DepopListings400Error1
    | V1DepopListings401Error1
    | V1DepopListings429Error1
    | V1DepopListings502Error1
    | V1DepopListings503Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _GetV1DepopListingsError:
    def map(self, status_code: int, content: bytes) -> GetV1DepopListingsErrorBody:
        match status_code:
            case 400:
                return decode_json[V1DepopListings400Error1](content)
            case 401:
                return decode_json[V1DepopListings401Error1](content)
            case 429:
                return decode_json[V1DepopListings429Error1](content)
            case 502:
                return decode_json[V1DepopListings502Error1](content)
            case 503:
                return decode_json[V1DepopListings503Error1](content)
            case _:
                return RawError(status_code, content)


get_v1_depop_listings_error_mapper: Final[ErrorMapper[GetV1DepopListingsErrorBody]] = _GetV1DepopListingsError()

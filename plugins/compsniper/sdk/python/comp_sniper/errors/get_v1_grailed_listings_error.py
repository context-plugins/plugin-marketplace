from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.v1_grailed_listings400_error1 import V1GrailedListings400Error1
from ..models.v1_grailed_listings401_error1 import V1GrailedListings401Error1
from ..models.v1_grailed_listings429_error1 import V1GrailedListings429Error1
from ..models.v1_grailed_listings502_error1 import V1GrailedListings502Error1
from ..models.v1_grailed_listings503_error1 import V1GrailedListings503Error1

GetV1GrailedListingsErrorBody: TypeAlias = (
    V1GrailedListings400Error1
    | V1GrailedListings401Error1
    | V1GrailedListings429Error1
    | V1GrailedListings502Error1
    | V1GrailedListings503Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _GetV1GrailedListingsError:
    def map(self, status_code: int, content: bytes) -> GetV1GrailedListingsErrorBody:
        match status_code:
            case 400:
                return decode_json[V1GrailedListings400Error1](content)
            case 401:
                return decode_json[V1GrailedListings401Error1](content)
            case 429:
                return decode_json[V1GrailedListings429Error1](content)
            case 502:
                return decode_json[V1GrailedListings502Error1](content)
            case 503:
                return decode_json[V1GrailedListings503Error1](content)
            case _:
                return RawError(status_code, content)


get_v1_grailed_listings_error_mapper: Final[ErrorMapper[GetV1GrailedListingsErrorBody]] = _GetV1GrailedListingsError()

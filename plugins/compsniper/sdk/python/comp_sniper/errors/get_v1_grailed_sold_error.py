from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.v1_grailed_sold400_error1 import V1GrailedSold400Error1
from ..models.v1_grailed_sold401_error1 import V1GrailedSold401Error1
from ..models.v1_grailed_sold429_error1 import V1GrailedSold429Error1
from ..models.v1_grailed_sold502_error1 import V1GrailedSold502Error1
from ..models.v1_grailed_sold503_error1 import V1GrailedSold503Error1

GetV1GrailedSoldErrorBody: TypeAlias = (
    V1GrailedSold400Error1
    | V1GrailedSold401Error1
    | V1GrailedSold429Error1
    | V1GrailedSold502Error1
    | V1GrailedSold503Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _GetV1GrailedSoldError:
    def map(self, status_code: int, content: bytes) -> GetV1GrailedSoldErrorBody:
        match status_code:
            case 400:
                return decode_json[V1GrailedSold400Error1](content)
            case 401:
                return decode_json[V1GrailedSold401Error1](content)
            case 429:
                return decode_json[V1GrailedSold429Error1](content)
            case 502:
                return decode_json[V1GrailedSold502Error1](content)
            case 503:
                return decode_json[V1GrailedSold503Error1](content)
            case _:
                return RawError(status_code, content)


get_v1_grailed_sold_error_mapper: Final[ErrorMapper[GetV1GrailedSoldErrorBody]] = _GetV1GrailedSoldError()

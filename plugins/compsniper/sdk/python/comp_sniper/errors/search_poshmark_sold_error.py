from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.unions.v1_poshmark_sold_response12 import V1PoshmarkSoldResponse12
from ..models.v1_poshmark_sold400_error1 import V1PoshmarkSold400Error1
from ..models.v1_poshmark_sold401_error1 import V1PoshmarkSold401Error1
from ..models.v1_poshmark_sold500_error1 import V1PoshmarkSold500Error1
from ..models.v1_poshmark_sold502_error1 import V1PoshmarkSold502Error1
from ..models.v1_poshmark_sold503_error1 import V1PoshmarkSold503Error1

SearchPoshmarkSoldErrorBody: TypeAlias = (
    V1PoshmarkSold400Error1
    | V1PoshmarkSold401Error1
    | V1PoshmarkSoldResponse12
    | V1PoshmarkSold500Error1
    | V1PoshmarkSold502Error1
    | V1PoshmarkSold503Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _SearchPoshmarkSoldError:
    def map(self, status_code: int, content: bytes) -> SearchPoshmarkSoldErrorBody:
        match status_code:
            case 400:
                return decode_json[V1PoshmarkSold400Error1](content)
            case 401:
                return decode_json[V1PoshmarkSold401Error1](content)
            case 429:
                return decode_json[V1PoshmarkSoldResponse12](content)
            case 500:
                return decode_json[V1PoshmarkSold500Error1](content)
            case 502:
                return decode_json[V1PoshmarkSold502Error1](content)
            case 503:
                return decode_json[V1PoshmarkSold503Error1](content)
            case _:
                return RawError(status_code, content)


search_poshmark_sold_error_mapper: Final[ErrorMapper[SearchPoshmarkSoldErrorBody]] = _SearchPoshmarkSoldError()

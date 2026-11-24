from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetTendersAwardsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetTendersAwardsError:
    def map(self, status_code: int, content: bytes) -> GetTendersAwardsErrorBody:
        match status_code:
            case 400 | 401 | 429:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_tenders_awards_error_mapper: Final[ErrorMapper[GetTendersAwardsErrorBody]] = _GetTendersAwardsError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem_details import ProblemDetails

GetApiV1ExchangesErrorBody: TypeAlias = ProblemDetails | RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1ExchangesError:
    def map(self, status_code: int, content: bytes) -> GetApiV1ExchangesErrorBody:
        match status_code:
            case 401 | 403:
                return decode_json[ProblemDetails](content)
            case _:
                return RawError(status_code, content)


get_api_v1_exchanges_error_mapper: Final[ErrorMapper[GetApiV1ExchangesErrorBody]] = _GetApiV1ExchangesError()

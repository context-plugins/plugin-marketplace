from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem_details import ProblemDetails

ListGcpSpendCudsErrorBody: TypeAlias = ProblemDetails | RawError


@dataclass(frozen=True, slots=True)
class _ListGcpSpendCudsError:
    def map(self, status_code: int, content: bytes) -> ListGcpSpendCudsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 500 | 503:
                return decode_json[ProblemDetails](content)
            case _:
                return RawError(status_code, content)


list_gcp_spend_cuds_error_mapper: Final[ErrorMapper[ListGcpSpendCudsErrorBody]] = _ListGcpSpendCudsError()

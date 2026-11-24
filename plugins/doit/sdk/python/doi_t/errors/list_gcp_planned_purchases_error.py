from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem_details import ProblemDetails

ListGcpPlannedPurchasesErrorBody: TypeAlias = ProblemDetails | RawError


@dataclass(frozen=True, slots=True)
class _ListGcpPlannedPurchasesError:
    def map(self, status_code: int, content: bytes) -> ListGcpPlannedPurchasesErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 500 | 503:
                return decode_json[ProblemDetails](content)
            case _:
                return RawError(status_code, content)


list_gcp_planned_purchases_error_mapper: Final[
    ErrorMapper[ListGcpPlannedPurchasesErrorBody]
] = _ListGcpPlannedPurchasesError()

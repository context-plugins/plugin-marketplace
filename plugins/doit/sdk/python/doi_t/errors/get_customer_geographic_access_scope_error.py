from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem_details import ProblemDetails

GetCustomerGeographicAccessScopeErrorBody: TypeAlias = ProblemDetails | RawError


@dataclass(frozen=True, slots=True)
class _GetCustomerGeographicAccessScopeError:
    def map(self, status_code: int, content: bytes) -> GetCustomerGeographicAccessScopeErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 500 | 503:
                return decode_json[ProblemDetails](content)
            case _:
                return RawError(status_code, content)


get_customer_geographic_access_scope_error_mapper: Final[
    ErrorMapper[GetCustomerGeographicAccessScopeErrorBody]
] = _GetCustomerGeographicAccessScopeError()

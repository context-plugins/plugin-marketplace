from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem_details import ProblemDetails

UpdateUserGeographicAccessScopeErrorBody: TypeAlias = ProblemDetails | RawError


@dataclass(frozen=True, slots=True)
class _UpdateUserGeographicAccessScopeError:
    def map(self, status_code: int, content: bytes) -> UpdateUserGeographicAccessScopeErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 500 | 503:
                return decode_json[ProblemDetails](content)
            case _:
                return RawError(status_code, content)


update_user_geographic_access_scope_error_mapper: Final[
    ErrorMapper[UpdateUserGeographicAccessScopeErrorBody]
] = _UpdateUserGeographicAccessScopeError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.problem_details import ProblemDetails

GetServiceAccountTokenErrorBody: TypeAlias = Error | ProblemDetails | RawError


@dataclass(frozen=True, slots=True)
class _GetServiceAccountTokenError:
    def map(self, status_code: int, content: bytes) -> GetServiceAccountTokenErrorBody:
        match status_code:
            case 401 | 403:
                return decode_json[Error](content)
            case 404 | 500:
                return decode_json[ProblemDetails](content)
            case _:
                return RawError(status_code, content)


get_service_account_token_error_mapper: Final[
    ErrorMapper[GetServiceAccountTokenErrorBody]
] = _GetServiceAccountTokenError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.problem_details import ProblemDetails

UpdateServiceAccountTokenErrorBody: TypeAlias = ProblemDetails | Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdateServiceAccountTokenError:
    def map(self, status_code: int, content: bytes) -> UpdateServiceAccountTokenErrorBody:
        match status_code:
            case 400 | 404 | 422 | 500:
                return decode_json[ProblemDetails](content)
            case 401 | 403:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update_service_account_token_error_mapper: Final[
    ErrorMapper[UpdateServiceAccountTokenErrorBody]
] = _UpdateServiceAccountTokenError()

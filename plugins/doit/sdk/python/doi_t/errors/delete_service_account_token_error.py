from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.problem_details import ProblemDetails

DeleteServiceAccountTokenErrorBody: TypeAlias = ProblemDetails | Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteServiceAccountTokenError:
    def map(self, status_code: int, content: bytes) -> DeleteServiceAccountTokenErrorBody:
        match status_code:
            case 400 | 404 | 500:
                return decode_json[ProblemDetails](content)
            case 401 | 403:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_service_account_token_error_mapper: Final[
    ErrorMapper[DeleteServiceAccountTokenErrorBody]
] = _DeleteServiceAccountTokenError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.problem_details import ProblemDetails

UpdateServiceAccountErrorBody: TypeAlias = ProblemDetails | Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdateServiceAccountError:
    def map(self, status_code: int, content: bytes) -> UpdateServiceAccountErrorBody:
        match status_code:
            case 400 | 404 | 409 | 412 | 415 | 422 | 428 | 500:
                return decode_json[ProblemDetails](content)
            case 401 | 403:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update_service_account_error_mapper: Final[ErrorMapper[UpdateServiceAccountErrorBody]] = _UpdateServiceAccountError()

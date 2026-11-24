from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.problem_details import ProblemDetails

DeleteServiceAccountErrorBody: TypeAlias = ProblemDetails | Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteServiceAccountError:
    def map(self, status_code: int, content: bytes) -> DeleteServiceAccountErrorBody:
        match status_code:
            case 400 | 404 | 412 | 428 | 500:
                return decode_json[ProblemDetails](content)
            case 401 | 403:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_service_account_error_mapper: Final[ErrorMapper[DeleteServiceAccountErrorBody]] = _DeleteServiceAccountError()

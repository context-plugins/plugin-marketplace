from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.problem_details import ProblemDetails

CreateServiceAccountErrorBody: TypeAlias = ProblemDetails | Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateServiceAccountError:
    def map(self, status_code: int, content: bytes) -> CreateServiceAccountErrorBody:
        match status_code:
            case 400 | 409 | 422 | 500:
                return decode_json[ProblemDetails](content)
            case 401 | 403:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_service_account_error_mapper: Final[ErrorMapper[CreateServiceAccountErrorBody]] = _CreateServiceAccountError()

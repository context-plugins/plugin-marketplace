from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.problem_details import ProblemDetails

GetServiceAccountErrorBody: TypeAlias = ProblemDetails | Error | RawError


@dataclass(frozen=True, slots=True)
class _GetServiceAccountError:
    def map(self, status_code: int, content: bytes) -> GetServiceAccountErrorBody:
        match status_code:
            case 400 | 404 | 500:
                return decode_json[ProblemDetails](content)
            case 401 | 403:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_service_account_error_mapper: Final[ErrorMapper[GetServiceAccountErrorBody]] = _GetServiceAccountError()

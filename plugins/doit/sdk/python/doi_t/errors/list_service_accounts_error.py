from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.problem_details import ProblemDetails

ListServiceAccountsErrorBody: TypeAlias = Error | ProblemDetails | RawError


@dataclass(frozen=True, slots=True)
class _ListServiceAccountsError:
    def map(self, status_code: int, content: bytes) -> ListServiceAccountsErrorBody:
        match status_code:
            case 401 | 403:
                return decode_json[Error](content)
            case 500:
                return decode_json[ProblemDetails](content)
            case _:
                return RawError(status_code, content)


list_service_accounts_error_mapper: Final[ErrorMapper[ListServiceAccountsErrorBody]] = _ListServiceAccountsError()

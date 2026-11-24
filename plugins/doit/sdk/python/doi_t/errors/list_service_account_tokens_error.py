from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.problem_details import ProblemDetails

ListServiceAccountTokensErrorBody: TypeAlias = Error | ProblemDetails | RawError


@dataclass(frozen=True, slots=True)
class _ListServiceAccountTokensError:
    def map(self, status_code: int, content: bytes) -> ListServiceAccountTokensErrorBody:
        match status_code:
            case 401 | 403:
                return decode_json[Error](content)
            case 404 | 500:
                return decode_json[ProblemDetails](content)
            case _:
                return RawError(status_code, content)


list_service_account_tokens_error_mapper: Final[
    ErrorMapper[ListServiceAccountTokensErrorBody]
] = _ListServiceAccountTokensError()

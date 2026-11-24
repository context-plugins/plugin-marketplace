from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

DeleteSessionSessionsSessionIdDeleteErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _DeleteSessionSessionsSessionIdDeleteError:
    def map(self, status_code: int, content: bytes) -> DeleteSessionSessionsSessionIdDeleteErrorBody:
        match status_code:
            case 403 | 404 | 502 | 503:
                return RawError(status_code, content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


delete_session_sessions_session_id_delete_error_mapper: Final[
    ErrorMapper[DeleteSessionSessionsSessionIdDeleteErrorBody]
] = _DeleteSessionSessionsSessionIdDeleteError()

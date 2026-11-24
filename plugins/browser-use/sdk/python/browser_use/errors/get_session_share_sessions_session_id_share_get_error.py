from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

GetSessionShareSessionsSessionIdShareGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetSessionShareSessionsSessionIdShareGetError:
    def map(self, status_code: int, content: bytes) -> GetSessionShareSessionsSessionIdShareGetErrorBody:
        match status_code:
            case 404:
                return RawError(status_code, content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_session_share_sessions_session_id_share_get_error_mapper: Final[
    ErrorMapper[GetSessionShareSessionsSessionIdShareGetErrorBody]
] = _GetSessionShareSessionsSessionIdShareGetError()

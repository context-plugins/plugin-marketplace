from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

PurgeSessionSessionsSessionIdPurgePostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _PurgeSessionSessionsSessionIdPurgePostError:
    def map(self, status_code: int, content: bytes) -> PurgeSessionSessionsSessionIdPurgePostErrorBody:
        match status_code:
            case 403 | 404:
                return RawError(status_code, content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


purge_session_sessions_session_id_purge_post_error_mapper: Final[
    ErrorMapper[PurgeSessionSessionsSessionIdPurgePostErrorBody]
] = _PurgeSessionSessionsSessionIdPurgePostError()

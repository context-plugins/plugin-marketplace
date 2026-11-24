from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.session_not_found_error import SessionNotFoundError

GetBrowserSessionBrowsersSessionIdGetErrorBody: TypeAlias = SessionNotFoundError | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetBrowserSessionBrowsersSessionIdGetError:
    def map(self, status_code: int, content: bytes) -> GetBrowserSessionBrowsersSessionIdGetErrorBody:
        match status_code:
            case 404:
                return decode_json[SessionNotFoundError](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_browser_session_browsers_session_id_get_error_mapper: Final[
    ErrorMapper[GetBrowserSessionBrowsersSessionIdGetErrorBody]
] = _GetBrowserSessionBrowsersSessionIdGetError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.session_not_found_error import SessionNotFoundError
from ..models.validation_error import ValidationError

UpdateBrowserSessionBrowsersSessionIdPatchErrorBody: TypeAlias = SessionNotFoundError | ValidationError | RawError


@dataclass(frozen=True, slots=True)
class _UpdateBrowserSessionBrowsersSessionIdPatchError:
    def map(self, status_code: int, content: bytes) -> UpdateBrowserSessionBrowsersSessionIdPatchErrorBody:
        match status_code:
            case 404:
                return decode_json[SessionNotFoundError](content)
            case 422:
                return decode_json[ValidationError](content)
            case _:
                return RawError(status_code, content)


update_browser_session_browsers_session_id_patch_error_mapper: Final[
    ErrorMapper[UpdateBrowserSessionBrowsersSessionIdPatchErrorBody]
] = _UpdateBrowserSessionBrowsersSessionIdPatchError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.validate_error_json import ValidateErrorJson

ApproveSyncDraftErrorBody: TypeAlias = ValidateErrorJson | RawError


@dataclass(frozen=True, slots=True)
class _ApproveSyncDraftError:
    def map(self, status_code: int, content: bytes) -> ApproveSyncDraftErrorBody:
        match status_code:
            case 401 | 403 | 404 | 413:
                return RawError(status_code, content)
            case 409 | 422:
                return decode_json[ValidateErrorJson](content)
            case _:
                return RawError(status_code, content)


approve_sync_draft_error_mapper: Final[ErrorMapper[ApproveSyncDraftErrorBody]] = _ApproveSyncDraftError()

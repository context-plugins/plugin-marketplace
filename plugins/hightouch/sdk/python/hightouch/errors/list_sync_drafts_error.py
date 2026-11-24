from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.validate_error_json import ValidateErrorJson

ListSyncDraftsErrorBody: TypeAlias = ValidateErrorJson | RawError


@dataclass(frozen=True, slots=True)
class _ListSyncDraftsError:
    def map(self, status_code: int, content: bytes) -> ListSyncDraftsErrorBody:
        match status_code:
            case 401 | 403:
                return RawError(status_code, content)
            case 422:
                return decode_json[ValidateErrorJson](content)
            case _:
                return RawError(status_code, content)


list_sync_drafts_error_mapper: Final[ErrorMapper[ListSyncDraftsErrorBody]] = _ListSyncDraftsError()

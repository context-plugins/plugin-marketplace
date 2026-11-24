from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

ListRunAttachmentsRunsRunIdAttachmentsGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _ListRunAttachmentsRunsRunIdAttachmentsGetError:
    def map(self, status_code: int, content: bytes) -> ListRunAttachmentsRunsRunIdAttachmentsGetErrorBody:
        match status_code:
            case 403 | 404:
                return RawError(status_code, content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


list_run_attachments_runs_run_id_attachments_get_error_mapper: Final[
    ErrorMapper[ListRunAttachmentsRunsRunIdAttachmentsGetErrorBody]
] = _ListRunAttachmentsRunsRunIdAttachmentsGetError()

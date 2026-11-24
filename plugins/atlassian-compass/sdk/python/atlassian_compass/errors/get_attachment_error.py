from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_dto import ErrorResponseDto

GetAttachmentErrorBody: TypeAlias = ErrorResponseDto | RawError


@dataclass(frozen=True, slots=True)
class _GetAttachmentError:
    def map(self, status_code: int, content: bytes) -> GetAttachmentErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return decode_json[ErrorResponseDto](content)
            case _:
                return RawError(status_code, content)


get_attachment_error_mapper: Final[ErrorMapper[GetAttachmentErrorBody]] = _GetAttachmentError()

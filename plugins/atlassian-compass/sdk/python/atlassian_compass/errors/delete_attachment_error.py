from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_dto import ErrorResponseDto

DeleteAttachmentErrorBody: TypeAlias = ErrorResponseDto | RawError


@dataclass(frozen=True, slots=True)
class _DeleteAttachmentError:
    def map(self, status_code: int, content: bytes) -> DeleteAttachmentErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return decode_json[ErrorResponseDto](content)
            case _:
                return RawError(status_code, content)


delete_attachment_error_mapper: Final[ErrorMapper[DeleteAttachmentErrorBody]] = _DeleteAttachmentError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_dto import ErrorResponseDto

UploadAttachmentErrorBody: TypeAlias = ErrorResponseDto | RawError


@dataclass(frozen=True, slots=True)
class _UploadAttachmentError:
    def map(self, status_code: int, content: bytes) -> UploadAttachmentErrorBody:
        match status_code:
            case 400 | 403 | 404 | 422 | 500:
                return decode_json[ErrorResponseDto](content)
            case _:
                return RawError(status_code, content)


upload_attachment_error_mapper: Final[ErrorMapper[UploadAttachmentErrorBody]] = _UploadAttachmentError()

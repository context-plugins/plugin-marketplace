from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AddUploadBufferErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AddUploadBufferError:
    def map(self, status_code: int, content: bytes) -> AddUploadBufferErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


add_upload_buffer_error_mapper: Final[ErrorMapper[AddUploadBufferErrorBody]] = _AddUploadBufferError()

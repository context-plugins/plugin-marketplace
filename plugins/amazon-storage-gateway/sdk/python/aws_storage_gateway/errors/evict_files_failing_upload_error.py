from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

EvictFilesFailingUploadErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _EvictFilesFailingUploadError:
    def map(self, status_code: int, content: bytes) -> EvictFilesFailingUploadErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


evict_files_failing_upload_error_mapper: Final[
    ErrorMapper[EvictFilesFailingUploadErrorBody]
] = _EvictFilesFailingUploadError()

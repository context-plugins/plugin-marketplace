from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json

UploadApiSpecErrorBody: TypeAlias = str | RawError


@dataclass(frozen=True, slots=True)
class _UploadApiSpecError:
    def map(self, status_code: int, content: bytes) -> UploadApiSpecErrorBody:
        match status_code:
            case 400 | 403 | 422:
                return decode_json[str](content)
            case _:
                return RawError(status_code, content)


upload_api_spec_error_mapper: Final[ErrorMapper[UploadApiSpecErrorBody]] = _UploadApiSpecError()

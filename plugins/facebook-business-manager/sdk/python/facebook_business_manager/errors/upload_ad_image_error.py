from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UploadAdImageErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UploadAdImageError:
    def map(self, status_code: int, content: bytes) -> UploadAdImageErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


upload_ad_image_error_mapper: Final[ErrorMapper[UploadAdImageErrorBody]] = _UploadAdImageError()

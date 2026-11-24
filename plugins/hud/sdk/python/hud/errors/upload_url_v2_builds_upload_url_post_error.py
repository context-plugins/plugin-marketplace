from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

UploadUrlV2BuildsUploadUrlPostErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _UploadUrlV2BuildsUploadUrlPostError:
    def map(self, status_code: int, content: bytes) -> UploadUrlV2BuildsUploadUrlPostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


upload_url_v2_builds_upload_url_post_error_mapper: Final[
    ErrorMapper[UploadUrlV2BuildsUploadUrlPostErrorBody]
] = _UploadUrlV2BuildsUploadUrlPostError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_body import ApiErrorBody

UploadItemExternalErrorBody: TypeAlias = ApiErrorBody | RawError


@dataclass(frozen=True, slots=True)
class _UploadItemExternalError:
    def map(self, status_code: int, content: bytes) -> UploadItemExternalErrorBody:
        match status_code:
            case 400 | 401 | 404 | 409 | 413 | 415 | 422:
                return decode_json[ApiErrorBody](content)
            case _:
                return RawError(status_code, content)


upload_item_external_error_mapper: Final[ErrorMapper[UploadItemExternalErrorBody]] = _UploadItemExternalError()

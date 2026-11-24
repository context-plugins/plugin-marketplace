from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

CreateImportUploadV2ImportsUploadsPostErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _CreateImportUploadV2ImportsUploadsPostError:
    def map(self, status_code: int, content: bytes) -> CreateImportUploadV2ImportsUploadsPostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


create_import_upload_v2_imports_uploads_post_error_mapper: Final[
    ErrorMapper[CreateImportUploadV2ImportsUploadsPostErrorBody]
] = _CreateImportUploadV2ImportsUploadsPostError()

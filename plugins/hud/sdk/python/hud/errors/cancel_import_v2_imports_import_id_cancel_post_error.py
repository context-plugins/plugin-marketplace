from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

CancelImportV2ImportsImportIdCancelPostErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _CancelImportV2ImportsImportIdCancelPostError:
    def map(self, status_code: int, content: bytes) -> CancelImportV2ImportsImportIdCancelPostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


cancel_import_v2_imports_import_id_cancel_post_error_mapper: Final[
    ErrorMapper[CancelImportV2ImportsImportIdCancelPostErrorBody]
] = _CancelImportV2ImportsImportIdCancelPostError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

EstimateImportV2ImportsEstimateGetErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _EstimateImportV2ImportsEstimateGetError:
    def map(self, status_code: int, content: bytes) -> EstimateImportV2ImportsEstimateGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


estimate_import_v2_imports_estimate_get_error_mapper: Final[
    ErrorMapper[EstimateImportV2ImportsEstimateGetErrorBody]
] = _EstimateImportV2ImportsEstimateGetError()

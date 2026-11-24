from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

GetImportReportV2ImportsImportIdReportGetErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetImportReportV2ImportsImportIdReportGetError:
    def map(self, status_code: int, content: bytes) -> GetImportReportV2ImportsImportIdReportGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 413 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_import_report_v2_imports_import_id_report_get_error_mapper: Final[
    ErrorMapper[GetImportReportV2ImportsImportIdReportGetErrorBody]
] = _GetImportReportV2ImportsImportIdReportGetError()

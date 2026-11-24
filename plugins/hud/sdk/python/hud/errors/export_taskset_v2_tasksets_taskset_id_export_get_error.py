from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

ExportTasksetV2TasksetsTasksetIdExportGetErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _ExportTasksetV2TasksetsTasksetIdExportGetError:
    def map(self, status_code: int, content: bytes) -> ExportTasksetV2TasksetsTasksetIdExportGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


export_taskset_v2_tasksets_taskset_id_export_get_error_mapper: Final[
    ErrorMapper[ExportTasksetV2TasksetsTasksetIdExportGetErrorBody]
] = _ExportTasksetV2TasksetsTasksetIdExportGetError()

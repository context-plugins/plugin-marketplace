from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListImportFormatsV2ImportsFormatsGetErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListImportFormatsV2ImportsFormatsGetError:
    def map(self, status_code: int, content: bytes) -> ListImportFormatsV2ImportsFormatsGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_import_formats_v2_imports_formats_get_error_mapper: Final[
    ErrorMapper[ListImportFormatsV2ImportsFormatsGetErrorBody]
] = _ListImportFormatsV2ImportsFormatsGetError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json

GetVersionsVersionIdExportFormatErrorBody: TypeAlias = Any | RawError


@dataclass(frozen=True, slots=True)
class _GetVersionsVersionIdExportFormatError:
    def map(self, status_code: int, content: bytes) -> GetVersionsVersionIdExportFormatErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[Any](content)
            case _:
                return RawError(status_code, content)


get_versions_version_id_export_format_error_mapper: Final[
    ErrorMapper[GetVersionsVersionIdExportFormatErrorBody]
] = _GetVersionsVersionIdExportFormatError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ExportErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ExportError:
    def map(self, status_code: int, content: bytes) -> ExportErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


export_error_mapper: Final[ErrorMapper[ExportErrorBody]] = _ExportError()

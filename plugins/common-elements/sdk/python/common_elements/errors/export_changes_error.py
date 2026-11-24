from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ExportChangesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ExportChangesError:
    def map(self, status_code: int, content: bytes) -> ExportChangesErrorBody:
        match status_code:
            case 400 | 401 | 403 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


export_changes_error_mapper: Final[ErrorMapper[ExportChangesErrorBody]] = _ExportChangesError()

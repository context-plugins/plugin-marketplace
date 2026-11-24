from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ExportFormResponsesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ExportFormResponsesError:
    def map(self, status_code: int, content: bytes) -> ExportFormResponsesErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


export_form_responses_error_mapper: Final[ErrorMapper[ExportFormResponsesErrorBody]] = _ExportFormResponsesError()

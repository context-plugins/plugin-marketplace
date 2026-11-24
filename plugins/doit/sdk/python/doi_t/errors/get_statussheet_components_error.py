from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetStatussheetComponentsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetStatussheetComponentsError:
    def map(self, status_code: int, content: bytes) -> GetStatussheetComponentsErrorBody:
        match status_code:
            case 400 | 401 | 403:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_statussheet_components_error_mapper: Final[
    ErrorMapper[GetStatussheetComponentsErrorBody]
] = _GetStatussheetComponentsError()

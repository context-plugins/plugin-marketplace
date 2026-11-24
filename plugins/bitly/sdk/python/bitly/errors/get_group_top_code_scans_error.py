from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetGroupTopCodeScansErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetGroupTopCodeScansError:
    def map(self, status_code: int, content: bytes) -> GetGroupTopCodeScansErrorBody:
        match status_code:
            case 400 | 403 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_group_top_code_scans_error_mapper: Final[ErrorMapper[GetGroupTopCodeScansErrorBody]] = _GetGroupTopCodeScansError()

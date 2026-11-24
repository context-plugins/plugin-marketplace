from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetStatusErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetStatusError:
    def map(self, status_code: int, content: bytes) -> GetStatusErrorBody:
        match status_code:
            case 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_status_error_mapper: Final[ErrorMapper[GetStatusErrorBody]] = _GetStatusError()

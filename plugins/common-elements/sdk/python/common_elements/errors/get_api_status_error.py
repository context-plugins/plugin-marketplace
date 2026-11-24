from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetApiStatusErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetApiStatusError:
    def map(self, status_code: int, content: bytes) -> GetApiStatusErrorBody:
        match status_code:
            case 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_api_status_error_mapper: Final[ErrorMapper[GetApiStatusErrorBody]] = _GetApiStatusError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetLocationErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetLocationError:
    def map(self, status_code: int, content: bytes) -> GetLocationErrorBody:
        match status_code:
            case 401 | 403 | 404 | 429 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_location_error_mapper: Final[ErrorMapper[GetLocationErrorBody]] = _GetLocationError()

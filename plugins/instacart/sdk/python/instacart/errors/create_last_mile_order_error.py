from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateLastMileOrderErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateLastMileOrderError:
    def map(self, status_code: int, content: bytes) -> CreateLastMileOrderErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_last_mile_order_error_mapper: Final[ErrorMapper[CreateLastMileOrderErrorBody]] = _CreateLastMileOrderError()

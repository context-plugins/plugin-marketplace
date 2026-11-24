from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetAllocationErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetAllocationError:
    def map(self, status_code: int, content: bytes) -> GetAllocationErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_allocation_error_mapper: Final[ErrorMapper[GetAllocationErrorBody]] = _GetAllocationError()

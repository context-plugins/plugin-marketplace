from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UpdateAllocationErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdateAllocationError:
    def map(self, status_code: int, content: bytes) -> UpdateAllocationErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update_allocation_error_mapper: Final[ErrorMapper[UpdateAllocationErrorBody]] = _UpdateAllocationError()

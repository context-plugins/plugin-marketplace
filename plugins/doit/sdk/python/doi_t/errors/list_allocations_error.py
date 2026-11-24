from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListAllocationsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListAllocationsError:
    def map(self, status_code: int, content: bytes) -> ListAllocationsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_allocations_error_mapper: Final[ErrorMapper[ListAllocationsErrorBody]] = _ListAllocationsError()

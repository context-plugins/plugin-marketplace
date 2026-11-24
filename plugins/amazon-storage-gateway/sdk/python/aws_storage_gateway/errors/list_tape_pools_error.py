from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListTapePoolsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListTapePoolsError:
    def map(self, status_code: int, content: bytes) -> ListTapePoolsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_tape_pools_error_mapper: Final[ErrorMapper[ListTapePoolsErrorBody]] = _ListTapePoolsError()

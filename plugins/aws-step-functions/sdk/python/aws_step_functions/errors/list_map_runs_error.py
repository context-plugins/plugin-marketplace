from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListMapRunsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListMapRunsError:
    def map(self, status_code: int, content: bytes) -> ListMapRunsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_map_runs_error_mapper: Final[ErrorMapper[ListMapRunsErrorBody]] = _ListMapRunsError()

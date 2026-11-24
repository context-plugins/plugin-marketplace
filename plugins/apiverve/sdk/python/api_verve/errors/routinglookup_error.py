from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RoutinglookupErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RoutinglookupError:
    def map(self, status_code: int, content: bytes) -> RoutinglookupErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


routinglookup_error_mapper: Final[ErrorMapper[RoutinglookupErrorBody]] = _RoutinglookupError()

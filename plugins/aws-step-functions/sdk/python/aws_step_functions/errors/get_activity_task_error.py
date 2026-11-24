from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetActivityTaskErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetActivityTaskError:
    def map(self, status_code: int, content: bytes) -> GetActivityTaskErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_activity_task_error_mapper: Final[ErrorMapper[GetActivityTaskErrorBody]] = _GetActivityTaskError()

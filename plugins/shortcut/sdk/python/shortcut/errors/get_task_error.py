from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetTaskErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetTaskError:
    def map(self, status_code: int, content: bytes) -> GetTaskErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_task_error_mapper: Final[ErrorMapper[GetTaskErrorBody]] = _GetTaskError()

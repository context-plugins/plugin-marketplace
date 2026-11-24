from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateTaskErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateTaskError:
    def map(self, status_code: int, content: bytes) -> CreateTaskErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_task_error_mapper: Final[ErrorMapper[CreateTaskErrorBody]] = _CreateTaskError()

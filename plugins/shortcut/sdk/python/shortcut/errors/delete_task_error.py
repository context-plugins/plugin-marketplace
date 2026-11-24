from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteTaskErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteTaskError:
    def map(self, status_code: int, content: bytes) -> DeleteTaskErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_task_error_mapper: Final[ErrorMapper[DeleteTaskErrorBody]] = _DeleteTaskError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartMessageMoveTaskErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartMessageMoveTaskError:
    def map(self, status_code: int, content: bytes) -> StartMessageMoveTaskErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_message_move_task_error_mapper: Final[ErrorMapper[StartMessageMoveTaskErrorBody]] = _StartMessageMoveTaskError()

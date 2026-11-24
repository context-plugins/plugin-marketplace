from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListMessageMoveTasksErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListMessageMoveTasksError:
    def map(self, status_code: int, content: bytes) -> ListMessageMoveTasksErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_message_move_tasks_error_mapper: Final[ErrorMapper[ListMessageMoveTasksErrorBody]] = _ListMessageMoveTasksError()

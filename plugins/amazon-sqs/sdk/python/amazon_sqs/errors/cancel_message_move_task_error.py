from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CancelMessageMoveTaskErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CancelMessageMoveTaskError:
    def map(self, status_code: int, content: bytes) -> CancelMessageMoveTaskErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


cancel_message_move_task_error_mapper: Final[
    ErrorMapper[CancelMessageMoveTaskErrorBody]
] = _CancelMessageMoveTaskError()

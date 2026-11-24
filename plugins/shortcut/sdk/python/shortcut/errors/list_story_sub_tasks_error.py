from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListStorySubTasksErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListStorySubTasksError:
    def map(self, status_code: int, content: bytes) -> ListStorySubTasksErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_story_sub_tasks_error_mapper: Final[ErrorMapper[ListStorySubTasksErrorBody]] = _ListStorySubTasksError()

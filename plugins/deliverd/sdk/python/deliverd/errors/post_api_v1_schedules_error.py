from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1SchedulesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1SchedulesError:
    def map(self, status_code: int, content: bytes) -> PostApiV1SchedulesErrorBody:
        match status_code:
            case 400 | 403 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_schedules_error_mapper: Final[ErrorMapper[PostApiV1SchedulesErrorBody]] = _PostApiV1SchedulesError()

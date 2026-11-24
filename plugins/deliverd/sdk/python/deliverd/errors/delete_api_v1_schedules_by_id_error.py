from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteApiV1SchedulesByIdErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteApiV1SchedulesByIdError:
    def map(self, status_code: int, content: bytes) -> DeleteApiV1SchedulesByIdErrorBody:
        match status_code:
            case 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_api_v1_schedules_by_id_error_mapper: Final[
    ErrorMapper[DeleteApiV1SchedulesByIdErrorBody]
] = _DeleteApiV1SchedulesByIdError()

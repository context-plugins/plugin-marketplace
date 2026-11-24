from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PatchApiV1SchedulesByIdErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PatchApiV1SchedulesByIdError:
    def map(self, status_code: int, content: bytes) -> PatchApiV1SchedulesByIdErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


patch_api_v1_schedules_by_id_error_mapper: Final[
    ErrorMapper[PatchApiV1SchedulesByIdErrorBody]
] = _PatchApiV1SchedulesByIdError()

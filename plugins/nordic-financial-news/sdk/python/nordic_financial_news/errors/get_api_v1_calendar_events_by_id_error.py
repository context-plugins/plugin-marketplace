from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem_details import ProblemDetails

GetApiV1CalendarEventsByIdErrorBody: TypeAlias = ProblemDetails | RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1CalendarEventsByIdError:
    def map(self, status_code: int, content: bytes) -> GetApiV1CalendarEventsByIdErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return decode_json[ProblemDetails](content)
            case _:
                return RawError(status_code, content)


get_api_v1_calendar_events_by_id_error_mapper: Final[
    ErrorMapper[GetApiV1CalendarEventsByIdErrorBody]
] = _GetApiV1CalendarEventsByIdError()

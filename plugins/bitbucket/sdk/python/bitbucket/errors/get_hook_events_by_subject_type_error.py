from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetHookEventsBySubjectTypeErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetHookEventsBySubjectTypeError:
    def map(self, status_code: int, content: bytes) -> GetHookEventsBySubjectTypeErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_hook_events_by_subject_type_error_mapper: Final[
    ErrorMapper[GetHookEventsBySubjectTypeErrorBody]
] = _GetHookEventsBySubjectTypeError()

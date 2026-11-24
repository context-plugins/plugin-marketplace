from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem_details import ProblemDetails

GetApiV1StoriesErrorBody: TypeAlias = ProblemDetails | RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1StoriesError:
    def map(self, status_code: int, content: bytes) -> GetApiV1StoriesErrorBody:
        match status_code:
            case 401:
                return decode_json[ProblemDetails](content)
            case _:
                return RawError(status_code, content)


get_api_v1_stories_error_mapper: Final[ErrorMapper[GetApiV1StoriesErrorBody]] = _GetApiV1StoriesError()

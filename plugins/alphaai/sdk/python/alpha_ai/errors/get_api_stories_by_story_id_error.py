from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetApiStoriesByStoryIdErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetApiStoriesByStoryIdError:
    def map(self, status_code: int, content: bytes) -> GetApiStoriesByStoryIdErrorBody:
        match status_code:
            case 401 | 403 | 429:
                return decode_json[Error](content)
            case 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_api_stories_by_story_id_error_mapper: Final[
    ErrorMapper[GetApiStoriesByStoryIdErrorBody]
] = _GetApiStoriesByStoryIdError()

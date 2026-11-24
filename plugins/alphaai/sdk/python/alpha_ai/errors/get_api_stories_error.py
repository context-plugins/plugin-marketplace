from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetApiStoriesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetApiStoriesError:
    def map(self, status_code: int, content: bytes) -> GetApiStoriesErrorBody:
        match status_code:
            case 400 | 404:
                return RawError(status_code, content)
            case 401 | 403 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_api_stories_error_mapper: Final[ErrorMapper[GetApiStoriesErrorBody]] = _GetApiStoriesError()

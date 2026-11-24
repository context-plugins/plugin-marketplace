from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.play_developers_query401_error1 import PlayDevelopersQuery401Error1

DevFilterSearchPlayDevelopersQueryPostErrorBody: TypeAlias = (
    PlayDevelopersQuery401Error1 | str | HttpValidationError | RawError
)


@dataclass(frozen=True, slots=True)
class _DevFilterSearchPlayDevelopersQueryPostError:
    def map(self, status_code: int, content: bytes) -> DevFilterSearchPlayDevelopersQueryPostErrorBody:
        match status_code:
            case 401:
                return decode_json[PlayDevelopersQuery401Error1](content)
            case 402:
                return decode_json[str](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


dev_filter_search_play_developers_query_post_error_mapper: Final[
    ErrorMapper[DevFilterSearchPlayDevelopersQueryPostErrorBody]
] = _DevFilterSearchPlayDevelopersQueryPostError()

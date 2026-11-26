from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetApiNewsByUidRelatedErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetApiNewsByUidRelatedError:
    def map(self, status_code: int, content: bytes) -> GetApiNewsByUidRelatedErrorBody:
        match status_code:
            case 401 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_api_news_by_uid_related_error_mapper: Final[
    ErrorMapper[GetApiNewsByUidRelatedErrorBody]
] = _GetApiNewsByUidRelatedError()

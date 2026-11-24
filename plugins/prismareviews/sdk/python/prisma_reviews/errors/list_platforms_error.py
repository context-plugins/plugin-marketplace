from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListPlatformsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListPlatformsError:
    def map(self, status_code: int, content: bytes) -> ListPlatformsErrorBody:
        match status_code:
            case 401 | 403 | 429 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_platforms_error_mapper: Final[ErrorMapper[ListPlatformsErrorBody]] = _ListPlatformsError()

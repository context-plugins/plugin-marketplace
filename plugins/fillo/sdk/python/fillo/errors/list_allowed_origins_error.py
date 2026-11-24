from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListAllowedOriginsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListAllowedOriginsError:
    def map(self, status_code: int, content: bytes) -> ListAllowedOriginsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_allowed_origins_error_mapper: Final[ErrorMapper[ListAllowedOriginsErrorBody]] = _ListAllowedOriginsError()

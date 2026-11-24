from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetUserErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetUserError:
    def map(self, status_code: int, content: bytes) -> GetUserErrorBody:
        match status_code:
            case 403 | 404 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_user_error_mapper: Final[ErrorMapper[GetUserErrorBody]] = _GetUserError()

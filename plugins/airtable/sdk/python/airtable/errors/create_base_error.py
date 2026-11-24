from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateBaseErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateBaseError:
    def map(self, status_code: int, content: bytes) -> CreateBaseErrorBody:
        match status_code:
            case 401 | 403 | 422 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_base_error_mapper: Final[ErrorMapper[CreateBaseErrorBody]] = _CreateBaseError()

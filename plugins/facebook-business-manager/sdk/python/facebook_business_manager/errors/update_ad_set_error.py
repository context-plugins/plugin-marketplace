from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UpdateAdSetErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdateAdSetError:
    def map(self, status_code: int, content: bytes) -> UpdateAdSetErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update_ad_set_error_mapper: Final[ErrorMapper[UpdateAdSetErrorBody]] = _UpdateAdSetError()

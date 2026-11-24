from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetFaxErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetFaxError:
    def map(self, status_code: int, content: bytes) -> GetFaxErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_fax_error_mapper: Final[ErrorMapper[GetFaxErrorBody]] = _GetFaxError()

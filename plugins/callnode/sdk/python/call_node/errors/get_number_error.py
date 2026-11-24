from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetNumberErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetNumberError:
    def map(self, status_code: int, content: bytes) -> GetNumberErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_number_error_mapper: Final[ErrorMapper[GetNumberErrorBody]] = _GetNumberError()

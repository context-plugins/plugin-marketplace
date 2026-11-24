from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetBusinessFileErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetBusinessFileError:
    def map(self, status_code: int, content: bytes) -> GetBusinessFileErrorBody:
        match status_code:
            case 402 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_business_file_error_mapper: Final[ErrorMapper[GetBusinessFileErrorBody]] = _GetBusinessFileError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.usage_limit_error import UsageLimitError

DecodeUsPlateErrorBody: TypeAlias = Error | UsageLimitError | RawError


@dataclass(frozen=True, slots=True)
class _DecodeUsPlateError:
    def map(self, status_code: int, content: bytes) -> DecodeUsPlateErrorBody:
        match status_code:
            case 400 | 401 | 404 | 500:
                return decode_json[Error](content)
            case 429:
                return decode_json[UsageLimitError](content)
            case _:
                return RawError(status_code, content)


decode_us_plate_error_mapper: Final[ErrorMapper[DecodeUsPlateErrorBody]] = _DecodeUsPlateError()

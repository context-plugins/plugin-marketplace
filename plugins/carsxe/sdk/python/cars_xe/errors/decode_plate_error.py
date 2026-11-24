from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.usage_limit_error import UsageLimitError

DecodePlateErrorBody: TypeAlias = Error | UsageLimitError | RawError


@dataclass(frozen=True, slots=True)
class _DecodePlateError:
    def map(self, status_code: int, content: bytes) -> DecodePlateErrorBody:
        match status_code:
            case 400 | 401 | 404 | 502 | 504:
                return decode_json[Error](content)
            case 429:
                return decode_json[UsageLimitError](content)
            case _:
                return RawError(status_code, content)


decode_plate_error_mapper: Final[ErrorMapper[DecodePlateErrorBody]] = _DecodePlateError()

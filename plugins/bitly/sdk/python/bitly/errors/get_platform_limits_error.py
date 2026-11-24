from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetPlatformLimitsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetPlatformLimitsError:
    def map(self, status_code: int, content: bytes) -> GetPlatformLimitsErrorBody:
        match status_code:
            case 403 | 404 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_platform_limits_error_mapper: Final[ErrorMapper[GetPlatformLimitsErrorBody]] = _GetPlatformLimitsError()

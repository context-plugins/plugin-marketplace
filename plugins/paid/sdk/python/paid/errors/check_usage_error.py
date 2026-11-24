from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CheckUsageErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CheckUsageError:
    def map(self, status_code: int, content: bytes) -> CheckUsageErrorBody:
        match status_code:
            case 400 | 404 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


check_usage_error_mapper: Final[ErrorMapper[CheckUsageErrorBody]] = _CheckUsageError()

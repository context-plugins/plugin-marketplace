from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

StartScanErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _StartScanError:
    def map(self, status_code: int, content: bytes) -> StartScanErrorBody:
        match status_code:
            case 400 | 401 | 403 | 409 | 422 | 429 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


start_scan_error_mapper: Final[ErrorMapper[StartScanErrorBody]] = _StartScanError()

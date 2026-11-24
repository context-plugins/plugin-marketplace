from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

X402ScanErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _X402ScanError:
    def map(self, status_code: int, content: bytes) -> X402ScanErrorBody:
        match status_code:
            case 400 | 402 | 502:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


x402_scan_error_mapper: Final[ErrorMapper[X402ScanErrorBody]] = _X402ScanError()

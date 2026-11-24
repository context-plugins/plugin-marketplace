from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

SecurityScanErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _SecurityScanError:
    def map(self, status_code: int, content: bytes) -> SecurityScanErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


security_scan_error_mapper: Final[ErrorMapper[SecurityScanErrorBody]] = _SecurityScanError()

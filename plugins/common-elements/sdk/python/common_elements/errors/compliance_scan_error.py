from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ComplianceScanErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ComplianceScanError:
    def map(self, status_code: int, content: bytes) -> ComplianceScanErrorBody:
        match status_code:
            case 400 | 401 | 403 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


compliance_scan_error_mapper: Final[ErrorMapper[ComplianceScanErrorBody]] = _ComplianceScanError()

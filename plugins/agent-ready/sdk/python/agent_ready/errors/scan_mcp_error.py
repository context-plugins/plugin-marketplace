from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ScanMcpErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ScanMcpError:
    def map(self, status_code: int, content: bytes) -> ScanMcpErrorBody:
        match status_code:
            case 400 | 429 | 502:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


scan_mcp_error_mapper: Final[ErrorMapper[ScanMcpErrorBody]] = _ScanMcpError()

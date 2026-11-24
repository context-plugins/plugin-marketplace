from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ShutdownGateway2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ShutdownGateway2Error:
    def map(self, status_code: int, content: bytes) -> ShutdownGateway2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


shutdown_gateway2_error_mapper: Final[ErrorMapper[ShutdownGateway2ErrorBody]] = _ShutdownGateway2Error()

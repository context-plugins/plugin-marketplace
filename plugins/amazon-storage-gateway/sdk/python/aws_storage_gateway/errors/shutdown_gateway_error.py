from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ShutdownGatewayErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ShutdownGatewayError:
    def map(self, status_code: int, content: bytes) -> ShutdownGatewayErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


shutdown_gateway_error_mapper: Final[ErrorMapper[ShutdownGatewayErrorBody]] = _ShutdownGatewayError()

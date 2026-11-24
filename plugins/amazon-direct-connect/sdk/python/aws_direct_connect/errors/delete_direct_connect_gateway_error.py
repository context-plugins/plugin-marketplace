from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteDirectConnectGatewayErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteDirectConnectGatewayError:
    def map(self, status_code: int, content: bytes) -> DeleteDirectConnectGatewayErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_direct_connect_gateway_error_mapper: Final[
    ErrorMapper[DeleteDirectConnectGatewayErrorBody]
] = _DeleteDirectConnectGatewayError()

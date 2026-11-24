from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateDirectConnectGatewayErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateDirectConnectGatewayError:
    def map(self, status_code: int, content: bytes) -> CreateDirectConnectGatewayErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_direct_connect_gateway_error_mapper: Final[
    ErrorMapper[CreateDirectConnectGatewayErrorBody]
] = _CreateDirectConnectGatewayError()

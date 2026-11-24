from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteDirectConnectGatewayAssociationErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteDirectConnectGatewayAssociationError:
    def map(self, status_code: int, content: bytes) -> DeleteDirectConnectGatewayAssociationErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_direct_connect_gateway_association_error_mapper: Final[
    ErrorMapper[DeleteDirectConnectGatewayAssociationErrorBody]
] = _DeleteDirectConnectGatewayAssociationError()

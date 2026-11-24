from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateDirectConnectGatewayAssociationErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateDirectConnectGatewayAssociationError:
    def map(self, status_code: int, content: bytes) -> UpdateDirectConnectGatewayAssociationErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_direct_connect_gateway_association_error_mapper: Final[
    ErrorMapper[UpdateDirectConnectGatewayAssociationErrorBody]
] = _UpdateDirectConnectGatewayAssociationError()

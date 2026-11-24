from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteDirectConnectGatewayAssociationProposalErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteDirectConnectGatewayAssociationProposalError:
    def map(self, status_code: int, content: bytes) -> DeleteDirectConnectGatewayAssociationProposalErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_direct_connect_gateway_association_proposal_error_mapper: Final[
    ErrorMapper[DeleteDirectConnectGatewayAssociationProposalErrorBody]
] = _DeleteDirectConnectGatewayAssociationProposalError()

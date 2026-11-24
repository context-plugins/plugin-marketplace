from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AcceptDirectConnectGatewayAssociationProposalErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AcceptDirectConnectGatewayAssociationProposalError:
    def map(self, status_code: int, content: bytes) -> AcceptDirectConnectGatewayAssociationProposalErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


accept_direct_connect_gateway_association_proposal_error_mapper: Final[
    ErrorMapper[AcceptDirectConnectGatewayAssociationProposalErrorBody]
] = _AcceptDirectConnectGatewayAssociationProposalError()

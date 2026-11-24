from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateDirectConnectGatewayAssociationProposalErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateDirectConnectGatewayAssociationProposalError:
    def map(self, status_code: int, content: bytes) -> CreateDirectConnectGatewayAssociationProposalErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_direct_connect_gateway_association_proposal_error_mapper: Final[
    ErrorMapper[CreateDirectConnectGatewayAssociationProposalErrorBody]
] = _CreateDirectConnectGatewayAssociationProposalError()

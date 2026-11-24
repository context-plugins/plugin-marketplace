from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeDirectConnectGatewayAssociationProposalsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeDirectConnectGatewayAssociationProposalsError:
    def map(self, status_code: int, content: bytes) -> DescribeDirectConnectGatewayAssociationProposalsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_direct_connect_gateway_association_proposals_error_mapper: Final[
    ErrorMapper[DescribeDirectConnectGatewayAssociationProposalsErrorBody]
] = _DescribeDirectConnectGatewayAssociationProposalsError()

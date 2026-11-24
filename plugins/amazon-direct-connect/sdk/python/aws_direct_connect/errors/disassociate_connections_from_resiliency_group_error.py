from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DisassociateConnectionsFromResiliencyGroupErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DisassociateConnectionsFromResiliencyGroupError:
    def map(self, status_code: int, content: bytes) -> DisassociateConnectionsFromResiliencyGroupErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


disassociate_connections_from_resiliency_group_error_mapper: Final[
    ErrorMapper[DisassociateConnectionsFromResiliencyGroupErrorBody]
] = _DisassociateConnectionsFromResiliencyGroupError()

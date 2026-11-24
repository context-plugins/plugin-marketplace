from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AssociateConnectionsToResiliencyGroupErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AssociateConnectionsToResiliencyGroupError:
    def map(self, status_code: int, content: bytes) -> AssociateConnectionsToResiliencyGroupErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


associate_connections_to_resiliency_group_error_mapper: Final[
    ErrorMapper[AssociateConnectionsToResiliencyGroupErrorBody]
] = _AssociateConnectionsToResiliencyGroupError()

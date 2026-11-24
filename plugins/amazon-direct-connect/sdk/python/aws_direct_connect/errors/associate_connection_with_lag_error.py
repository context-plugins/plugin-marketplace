from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AssociateConnectionWithLagErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AssociateConnectionWithLagError:
    def map(self, status_code: int, content: bytes) -> AssociateConnectionWithLagErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


associate_connection_with_lag_error_mapper: Final[
    ErrorMapper[AssociateConnectionWithLagErrorBody]
] = _AssociateConnectionWithLagError()

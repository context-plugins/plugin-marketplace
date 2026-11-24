from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DisassociateConnectionFromLagErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DisassociateConnectionFromLagError:
    def map(self, status_code: int, content: bytes) -> DisassociateConnectionFromLagErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


disassociate_connection_from_lag_error_mapper: Final[
    ErrorMapper[DisassociateConnectionFromLagErrorBody]
] = _DisassociateConnectionFromLagError()

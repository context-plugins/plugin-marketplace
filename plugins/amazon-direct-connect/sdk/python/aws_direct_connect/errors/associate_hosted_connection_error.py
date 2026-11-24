from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AssociateHostedConnectionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AssociateHostedConnectionError:
    def map(self, status_code: int, content: bytes) -> AssociateHostedConnectionErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


associate_hosted_connection_error_mapper: Final[
    ErrorMapper[AssociateHostedConnectionErrorBody]
] = _AssociateHostedConnectionError()

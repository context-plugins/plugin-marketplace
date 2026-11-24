from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ActivateGateway3ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ActivateGateway3Error:
    def map(self, status_code: int, content: bytes) -> ActivateGateway3ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


activate_gateway3_error_mapper: Final[ErrorMapper[ActivateGateway3ErrorBody]] = _ActivateGateway3Error()

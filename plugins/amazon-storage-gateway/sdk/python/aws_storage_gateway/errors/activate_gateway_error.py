from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ActivateGatewayErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ActivateGatewayError:
    def map(self, status_code: int, content: bytes) -> ActivateGatewayErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


activate_gateway_error_mapper: Final[ErrorMapper[ActivateGatewayErrorBody]] = _ActivateGatewayError()

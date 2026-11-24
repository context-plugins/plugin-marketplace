from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateNatGatewayErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateNatGatewayError:
    def map(self, status_code: int, content: bytes) -> CreateNatGatewayErrorBody:
        match status_code:
            case 400 | 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_nat_gateway_error_mapper: Final[ErrorMapper[CreateNatGatewayErrorBody]] = _CreateNatGatewayError()

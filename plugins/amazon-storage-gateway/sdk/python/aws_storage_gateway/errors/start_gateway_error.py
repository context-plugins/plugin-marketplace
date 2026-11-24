from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartGatewayErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartGatewayError:
    def map(self, status_code: int, content: bytes) -> StartGatewayErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_gateway_error_mapper: Final[ErrorMapper[StartGatewayErrorBody]] = _StartGatewayError()

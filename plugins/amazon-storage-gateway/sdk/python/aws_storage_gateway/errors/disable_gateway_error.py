from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DisableGatewayErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DisableGatewayError:
    def map(self, status_code: int, content: bytes) -> DisableGatewayErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


disable_gateway_error_mapper: Final[ErrorMapper[DisableGatewayErrorBody]] = _DisableGatewayError()

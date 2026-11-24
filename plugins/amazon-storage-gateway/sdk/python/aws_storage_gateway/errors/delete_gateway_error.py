from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteGatewayErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteGatewayError:
    def map(self, status_code: int, content: bytes) -> DeleteGatewayErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_gateway_error_mapper: Final[ErrorMapper[DeleteGatewayErrorBody]] = _DeleteGatewayError()

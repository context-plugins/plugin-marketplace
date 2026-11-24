from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AttachInternetGatewayErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AttachInternetGatewayError:
    def map(self, status_code: int, content: bytes) -> AttachInternetGatewayErrorBody:
        match status_code:
            case 400 | 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


attach_internet_gateway_error_mapper: Final[ErrorMapper[AttachInternetGatewayErrorBody]] = _AttachInternetGatewayError()

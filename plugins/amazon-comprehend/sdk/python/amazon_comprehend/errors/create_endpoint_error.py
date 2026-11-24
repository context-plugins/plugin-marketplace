from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateEndpointErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateEndpointError:
    def map(self, status_code: int, content: bytes) -> CreateEndpointErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_endpoint_error_mapper: Final[ErrorMapper[CreateEndpointErrorBody]] = _CreateEndpointError()

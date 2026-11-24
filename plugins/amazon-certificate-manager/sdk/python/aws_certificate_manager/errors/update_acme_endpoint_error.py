from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateAcmeEndpointErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateAcmeEndpointError:
    def map(self, status_code: int, content: bytes) -> UpdateAcmeEndpointErrorBody:
        match status_code:
            case 400 | 403 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_acme_endpoint_error_mapper: Final[ErrorMapper[UpdateAcmeEndpointErrorBody]] = _UpdateAcmeEndpointError()

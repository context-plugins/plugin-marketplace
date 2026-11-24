from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListAcmeEndpointsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListAcmeEndpointsError:
    def map(self, status_code: int, content: bytes) -> ListAcmeEndpointsErrorBody:
        match status_code:
            case 400 | 403 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_acme_endpoints_error_mapper: Final[ErrorMapper[ListAcmeEndpointsErrorBody]] = _ListAcmeEndpointsError()

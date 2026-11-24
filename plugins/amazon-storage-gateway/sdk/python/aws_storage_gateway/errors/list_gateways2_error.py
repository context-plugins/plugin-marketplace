from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListGateways2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListGateways2Error:
    def map(self, status_code: int, content: bytes) -> ListGateways2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_gateways2_error_mapper: Final[ErrorMapper[ListGateways2ErrorBody]] = _ListGateways2Error()

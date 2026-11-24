from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListGatewaysErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListGatewaysError:
    def map(self, status_code: int, content: bytes) -> ListGatewaysErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_gateways_error_mapper: Final[ErrorMapper[ListGatewaysErrorBody]] = _ListGatewaysError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateRouteTableErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateRouteTableError:
    def map(self, status_code: int, content: bytes) -> CreateRouteTableErrorBody:
        match status_code:
            case 400 | 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_route_table_error_mapper: Final[ErrorMapper[CreateRouteTableErrorBody]] = _CreateRouteTableError()

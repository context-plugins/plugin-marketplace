from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AssociateRouteTableErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AssociateRouteTableError:
    def map(self, status_code: int, content: bytes) -> AssociateRouteTableErrorBody:
        match status_code:
            case 400 | 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


associate_route_table_error_mapper: Final[ErrorMapper[AssociateRouteTableErrorBody]] = _AssociateRouteTableError()

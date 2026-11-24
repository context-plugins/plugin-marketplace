from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateRouteErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateRouteError:
    def map(self, status_code: int, content: bytes) -> CreateRouteErrorBody:
        match status_code:
            case 400 | 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_route_error_mapper: Final[ErrorMapper[CreateRouteErrorBody]] = _CreateRouteError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListEndpointsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListEndpointsError:
    def map(self, status_code: int, content: bytes) -> ListEndpointsErrorBody:
        match status_code:
            case 400 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_endpoints_error_mapper: Final[ErrorMapper[ListEndpointsErrorBody]] = _ListEndpointsError()

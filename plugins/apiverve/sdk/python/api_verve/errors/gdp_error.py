from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GdpErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GdpError:
    def map(self, status_code: int, content: bytes) -> GdpErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


gdp_error_mapper: Final[ErrorMapper[GdpErrorBody]] = _GdpError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

HmacErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _HmacError:
    def map(self, status_code: int, content: bytes) -> HmacErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


hmac_error_mapper: Final[ErrorMapper[HmacErrorBody]] = _HmacError()

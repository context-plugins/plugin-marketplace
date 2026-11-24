from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

FortunecookieErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _FortunecookieError:
    def map(self, status_code: int, content: bytes) -> FortunecookieErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


fortunecookie_error_mapper: Final[ErrorMapper[FortunecookieErrorBody]] = _FortunecookieError()

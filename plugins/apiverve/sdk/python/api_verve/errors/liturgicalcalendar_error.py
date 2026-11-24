from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

LiturgicalcalendarErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _LiturgicalcalendarError:
    def map(self, status_code: int, content: bytes) -> LiturgicalcalendarErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


liturgicalcalendar_error_mapper: Final[ErrorMapper[LiturgicalcalendarErrorBody]] = _LiturgicalcalendarError()

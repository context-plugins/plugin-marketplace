from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CurrentVisitorsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CurrentVisitorsError:
    def map(self, status_code: int, content: bytes) -> CurrentVisitorsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


current_visitors_error_mapper: Final[ErrorMapper[CurrentVisitorsErrorBody]] = _CurrentVisitorsError()

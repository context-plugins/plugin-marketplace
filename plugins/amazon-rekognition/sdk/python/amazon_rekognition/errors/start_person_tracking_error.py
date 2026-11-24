from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartPersonTrackingErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartPersonTrackingError:
    def map(self, status_code: int, content: bytes) -> StartPersonTrackingErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_person_tracking_error_mapper: Final[ErrorMapper[StartPersonTrackingErrorBody]] = _StartPersonTrackingError()

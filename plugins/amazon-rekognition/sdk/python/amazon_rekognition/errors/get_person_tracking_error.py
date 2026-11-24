from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetPersonTrackingErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetPersonTrackingError:
    def map(self, status_code: int, content: bytes) -> GetPersonTrackingErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_person_tracking_error_mapper: Final[ErrorMapper[GetPersonTrackingErrorBody]] = _GetPersonTrackingError()

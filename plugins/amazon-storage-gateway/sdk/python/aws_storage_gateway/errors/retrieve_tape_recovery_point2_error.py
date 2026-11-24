from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RetrieveTapeRecoveryPoint2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RetrieveTapeRecoveryPoint2Error:
    def map(self, status_code: int, content: bytes) -> RetrieveTapeRecoveryPoint2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


retrieve_tape_recovery_point2_error_mapper: Final[
    ErrorMapper[RetrieveTapeRecoveryPoint2ErrorBody]
] = _RetrieveTapeRecoveryPoint2Error()

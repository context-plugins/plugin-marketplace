from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RetrieveTapeRecoveryPointErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RetrieveTapeRecoveryPointError:
    def map(self, status_code: int, content: bytes) -> RetrieveTapeRecoveryPointErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


retrieve_tape_recovery_point_error_mapper: Final[
    ErrorMapper[RetrieveTapeRecoveryPointErrorBody]
] = _RetrieveTapeRecoveryPointError()

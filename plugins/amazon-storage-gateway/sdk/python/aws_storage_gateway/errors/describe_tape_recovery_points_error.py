from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeTapeRecoveryPointsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeTapeRecoveryPointsError:
    def map(self, status_code: int, content: bytes) -> DescribeTapeRecoveryPointsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_tape_recovery_points_error_mapper: Final[
    ErrorMapper[DescribeTapeRecoveryPointsErrorBody]
] = _DescribeTapeRecoveryPointsError()

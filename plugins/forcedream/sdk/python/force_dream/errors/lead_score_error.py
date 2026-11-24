from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

LeadScoreErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _LeadScoreError:
    def map(self, status_code: int, content: bytes) -> LeadScoreErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


lead_score_error_mapper: Final[ErrorMapper[LeadScoreErrorBody]] = _LeadScoreError()

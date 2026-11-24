from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UndeprecateActivityType2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UndeprecateActivityType2Error:
    def map(self, status_code: int, content: bytes) -> UndeprecateActivityType2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


undeprecate_activity_type2_error_mapper: Final[
    ErrorMapper[UndeprecateActivityType2ErrorBody]
] = _UndeprecateActivityType2Error()

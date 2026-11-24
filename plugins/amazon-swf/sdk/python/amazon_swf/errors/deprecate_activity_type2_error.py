from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeprecateActivityType2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeprecateActivityType2Error:
    def map(self, status_code: int, content: bytes) -> DeprecateActivityType2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


deprecate_activity_type2_error_mapper: Final[
    ErrorMapper[DeprecateActivityType2ErrorBody]
] = _DeprecateActivityType2Error()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeprecateActivityTypeErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeprecateActivityTypeError:
    def map(self, status_code: int, content: bytes) -> DeprecateActivityTypeErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


deprecate_activity_type_error_mapper: Final[ErrorMapper[DeprecateActivityTypeErrorBody]] = _DeprecateActivityTypeError()

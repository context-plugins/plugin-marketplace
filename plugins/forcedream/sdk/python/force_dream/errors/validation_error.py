from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ValidationErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ValidationError:
    def map(self, status_code: int, content: bytes) -> ValidationErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


validation_error_mapper: Final[ErrorMapper[ValidationErrorBody]] = _ValidationError()

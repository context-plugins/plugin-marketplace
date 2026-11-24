from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

EmailvalidatorErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _EmailvalidatorError:
    def map(self, status_code: int, content: bytes) -> EmailvalidatorErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


emailvalidator_error_mapper: Final[ErrorMapper[EmailvalidatorErrorBody]] = _EmailvalidatorError()

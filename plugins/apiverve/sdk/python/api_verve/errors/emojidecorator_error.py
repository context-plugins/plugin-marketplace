from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

EmojidecoratorErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _EmojidecoratorError:
    def map(self, status_code: int, content: bytes) -> EmojidecoratorErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


emojidecorator_error_mapper: Final[ErrorMapper[EmojidecoratorErrorBody]] = _EmojidecoratorError()

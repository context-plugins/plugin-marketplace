from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

HashgeneratorErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _HashgeneratorError:
    def map(self, status_code: int, content: bytes) -> HashgeneratorErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


hashgenerator_error_mapper: Final[ErrorMapper[HashgeneratorErrorBody]] = _HashgeneratorError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CuidgeneratorErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CuidgeneratorError:
    def map(self, status_code: int, content: bytes) -> CuidgeneratorErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


cuidgenerator_error_mapper: Final[ErrorMapper[CuidgeneratorErrorBody]] = _CuidgeneratorError()

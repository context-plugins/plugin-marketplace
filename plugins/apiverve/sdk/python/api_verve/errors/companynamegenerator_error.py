from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CompanynamegeneratorErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CompanynamegeneratorError:
    def map(self, status_code: int, content: bytes) -> CompanynamegeneratorErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


companynamegenerator_error_mapper: Final[ErrorMapper[CompanynamegeneratorErrorBody]] = _CompanynamegeneratorError()

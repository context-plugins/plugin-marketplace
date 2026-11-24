from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DuedatecalculatorErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DuedatecalculatorError:
    def map(self, status_code: int, content: bytes) -> DuedatecalculatorErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


duedatecalculator_error_mapper: Final[ErrorMapper[DuedatecalculatorErrorBody]] = _DuedatecalculatorError()

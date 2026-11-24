from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

SudokuErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _SudokuError:
    def map(self, status_code: int, content: bytes) -> SudokuErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


sudoku_error_mapper: Final[ErrorMapper[SudokuErrorBody]] = _SudokuError()

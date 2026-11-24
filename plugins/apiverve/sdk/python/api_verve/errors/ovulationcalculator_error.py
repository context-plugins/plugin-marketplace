from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

OvulationcalculatorErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _OvulationcalculatorError:
    def map(self, status_code: int, content: bytes) -> OvulationcalculatorErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


ovulationcalculator_error_mapper: Final[ErrorMapper[OvulationcalculatorErrorBody]] = _OvulationcalculatorError()

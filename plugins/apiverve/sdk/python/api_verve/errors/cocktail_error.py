from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CocktailErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CocktailError:
    def map(self, status_code: int, content: bytes) -> CocktailErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


cocktail_error_mapper: Final[ErrorMapper[CocktailErrorBody]] = _CocktailError()

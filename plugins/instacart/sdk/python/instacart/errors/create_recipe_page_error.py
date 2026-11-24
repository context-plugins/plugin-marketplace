from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error2 import Error2

CreateRecipePageErrorBody: TypeAlias = Error2 | RawError


@dataclass(frozen=True, slots=True)
class _CreateRecipePageError:
    def map(self, status_code: int, content: bytes) -> CreateRecipePageErrorBody:
        match status_code:
            case 400 | 401 | 429:
                return decode_json[Error2](content)
            case _:
                return RawError(status_code, content)


create_recipe_page_error_mapper: Final[ErrorMapper[CreateRecipePageErrorBody]] = _CreateRecipePageError()

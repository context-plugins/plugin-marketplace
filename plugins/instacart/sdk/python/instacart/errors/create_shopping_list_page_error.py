from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error2 import Error2

CreateShoppingListPageErrorBody: TypeAlias = Error2 | RawError


@dataclass(frozen=True, slots=True)
class _CreateShoppingListPageError:
    def map(self, status_code: int, content: bytes) -> CreateShoppingListPageErrorBody:
        match status_code:
            case 400 | 401 | 429:
                return decode_json[Error2](content)
            case _:
                return RawError(status_code, content)


create_shopping_list_page_error_mapper: Final[
    ErrorMapper[CreateShoppingListPageErrorBody]
] = _CreateShoppingListPageError()

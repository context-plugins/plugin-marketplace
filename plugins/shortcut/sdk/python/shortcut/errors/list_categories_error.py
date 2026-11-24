from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListCategoriesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListCategoriesError:
    def map(self, status_code: int, content: bytes) -> ListCategoriesErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_categories_error_mapper: Final[ErrorMapper[ListCategoriesErrorBody]] = _ListCategoriesError()

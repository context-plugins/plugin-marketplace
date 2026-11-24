from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.errors_model import ErrorsModel

ListCustomCategoriesErrorBody: TypeAlias = ErrorsModel | RawError


@dataclass(frozen=True, slots=True)
class _ListCustomCategoriesError:
    def map(self, status_code: int, content: bytes) -> ListCustomCategoriesErrorBody:
        match status_code:
            case 403 | 500:
                return decode_json[ErrorsModel](content)
            case _:
                return RawError(status_code, content)


list_custom_categories_error_mapper: Final[ErrorMapper[ListCustomCategoriesErrorBody]] = _ListCustomCategoriesError()

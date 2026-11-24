from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.errors_model import ErrorsModel

CreateCustomCategoryErrorBody: TypeAlias = ErrorsModel | RawError


@dataclass(frozen=True, slots=True)
class _CreateCustomCategoryError:
    def map(self, status_code: int, content: bytes) -> CreateCustomCategoryErrorBody:
        match status_code:
            case 400 | 403 | 500:
                return decode_json[ErrorsModel](content)
            case _:
                return RawError(status_code, content)


create_custom_category_error_mapper: Final[ErrorMapper[CreateCustomCategoryErrorBody]] = _CreateCustomCategoryError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListProductsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListProductsError:
    def map(self, status_code: int, content: bytes) -> ListProductsErrorBody:
        match status_code:
            case 400 | 401 | 403:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_products_error_mapper: Final[ErrorMapper[ListProductsErrorBody]] = _ListProductsError()

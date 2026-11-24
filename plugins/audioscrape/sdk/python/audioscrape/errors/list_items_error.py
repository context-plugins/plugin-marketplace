from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_body import ApiErrorBody

ListItemsErrorBody: TypeAlias = ApiErrorBody | RawError


@dataclass(frozen=True, slots=True)
class _ListItemsError:
    def map(self, status_code: int, content: bytes) -> ListItemsErrorBody:
        match status_code:
            case 401 | 402 | 403 | 429:
                return decode_json[ApiErrorBody](content)
            case _:
                return RawError(status_code, content)


list_items_error_mapper: Final[ErrorMapper[ListItemsErrorBody]] = _ListItemsError()

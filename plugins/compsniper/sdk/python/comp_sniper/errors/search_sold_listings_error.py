from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

SearchSoldListingsErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _SearchSoldListingsError:
    def map(self, status_code: int, content: bytes) -> SearchSoldListingsErrorBody:
        match status_code:
            case 400 | 401 | 429 | 502:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


search_sold_listings_error_mapper: Final[ErrorMapper[SearchSoldListingsErrorBody]] = _SearchSoldListingsError()

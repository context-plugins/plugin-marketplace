from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

BrowseSoldListingsByCategoryErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _BrowseSoldListingsByCategoryError:
    def map(self, status_code: int, content: bytes) -> BrowseSoldListingsByCategoryErrorBody:
        match status_code:
            case 400 | 401 | 429 | 502 | 503:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


browse_sold_listings_by_category_error_mapper: Final[
    ErrorMapper[BrowseSoldListingsByCategoryErrorBody]
] = _BrowseSoldListingsByCategoryError()

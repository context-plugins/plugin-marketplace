from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

ListAuctionLocationsErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _ListAuctionLocationsError:
    def map(self, status_code: int, content: bytes) -> ListAuctionLocationsErrorBody:
        match status_code:
            case 400 | 401 | 429 | 500:
                return RawError(status_code, content)
            case 403 | 404 | 422 | 503:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


list_auction_locations_error_mapper: Final[ErrorMapper[ListAuctionLocationsErrorBody]] = _ListAuctionLocationsError()

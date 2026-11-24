from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListAdsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListAdsError:
    def map(self, status_code: int, content: bytes) -> ListAdsErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_ads_error_mapper: Final[ErrorMapper[ListAdsErrorBody]] = _ListAdsError()

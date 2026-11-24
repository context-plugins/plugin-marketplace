from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetCacheRevalidationUsageErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetCacheRevalidationUsageError:
    def map(self, status_code: int, content: bytes) -> GetCacheRevalidationUsageErrorBody:
        match status_code:
            case 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_cache_revalidation_usage_error_mapper: Final[
    ErrorMapper[GetCacheRevalidationUsageErrorBody]
] = _GetCacheRevalidationUsageError()

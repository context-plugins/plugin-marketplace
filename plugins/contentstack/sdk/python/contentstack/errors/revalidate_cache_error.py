from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error2 import Error2
from ..models.error2_contentstack_environments_api import Error2ContentstackEnvironmentsApi

RevalidateCacheErrorBody: TypeAlias = Error2 | Error2ContentstackEnvironmentsApi | RawError


@dataclass(frozen=True, slots=True)
class _RevalidateCacheError:
    def map(self, status_code: int, content: bytes) -> RevalidateCacheErrorBody:
        match status_code:
            case 401:
                return decode_json[Error2](content)
            case 404:
                return decode_json[Error2ContentstackEnvironmentsApi](content)
            case _:
                return RawError(status_code, content)


revalidate_cache_error_mapper: Final[ErrorMapper[RevalidateCacheErrorBody]] = _RevalidateCacheError()

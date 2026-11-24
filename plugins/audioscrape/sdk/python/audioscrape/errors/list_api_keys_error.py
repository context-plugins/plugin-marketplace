from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_body import ApiErrorBody

ListApiKeysErrorBody: TypeAlias = ApiErrorBody | RawError


@dataclass(frozen=True, slots=True)
class _ListApiKeysError:
    def map(self, status_code: int, content: bytes) -> ListApiKeysErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiErrorBody](content)
            case _:
                return RawError(status_code, content)


list_api_keys_error_mapper: Final[ErrorMapper[ListApiKeysErrorBody]] = _ListApiKeysError()

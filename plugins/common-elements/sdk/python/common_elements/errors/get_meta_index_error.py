from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetMetaIndexErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetMetaIndexError:
    def map(self, status_code: int, content: bytes) -> GetMetaIndexErrorBody:
        match status_code:
            case 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_meta_index_error_mapper: Final[ErrorMapper[GetMetaIndexErrorBody]] = _GetMetaIndexError()

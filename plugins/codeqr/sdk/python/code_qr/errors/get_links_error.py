from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.m4001 import M4001

GetLinksErrorBody: TypeAlias = M4001 | RawError


@dataclass(frozen=True, slots=True)
class _GetLinksError:
    def map(self, status_code: int, content: bytes) -> GetLinksErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 410 | 422 | 429 | 500:
                return decode_json[M4001](content)
            case _:
                return RawError(status_code, content)


get_links_error_mapper: Final[ErrorMapper[GetLinksErrorBody]] = _GetLinksError()

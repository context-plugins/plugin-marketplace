from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateSiteErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateSiteError:
    def map(self, status_code: int, content: bytes) -> CreateSiteErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_site_error_mapper: Final[ErrorMapper[CreateSiteErrorBody]] = _CreateSiteError()

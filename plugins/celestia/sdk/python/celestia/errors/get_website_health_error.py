from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_celestia_website_contact_api import ErrorCelestiaWebsiteContactApi

GetWebsiteHealthErrorBody: TypeAlias = ErrorCelestiaWebsiteContactApi | RawError


@dataclass(frozen=True, slots=True)
class _GetWebsiteHealthError:
    def map(self, status_code: int, content: bytes) -> GetWebsiteHealthErrorBody:
        match status_code:
            case 405:
                return decode_json[ErrorCelestiaWebsiteContactApi](content)
            case _:
                return RawError(status_code, content)


get_website_health_error_mapper: Final[ErrorMapper[GetWebsiteHealthErrorBody]] = _GetWebsiteHealthError()

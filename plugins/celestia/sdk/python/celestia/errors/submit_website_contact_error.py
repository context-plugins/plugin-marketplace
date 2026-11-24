from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_celestia_website_contact_api import ErrorCelestiaWebsiteContactApi

SubmitWebsiteContactErrorBody: TypeAlias = ErrorCelestiaWebsiteContactApi | RawError


@dataclass(frozen=True, slots=True)
class _SubmitWebsiteContactError:
    def map(self, status_code: int, content: bytes) -> SubmitWebsiteContactErrorBody:
        match status_code:
            case 400 | 405 | 408 | 500:
                return decode_json[ErrorCelestiaWebsiteContactApi](content)
            case _:
                return RawError(status_code, content)


submit_website_contact_error_mapper: Final[ErrorMapper[SubmitWebsiteContactErrorBody]] = _SubmitWebsiteContactError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_celestia_website_contact_api import ErrorCelestiaWebsiteContactApi

SubscribeToWebsiteNewsletterErrorBody: TypeAlias = ErrorCelestiaWebsiteContactApi | RawError


@dataclass(frozen=True, slots=True)
class _SubscribeToWebsiteNewsletterError:
    def map(self, status_code: int, content: bytes) -> SubscribeToWebsiteNewsletterErrorBody:
        match status_code:
            case 400 | 405 | 408 | 429 | 500:
                return decode_json[ErrorCelestiaWebsiteContactApi](content)
            case _:
                return RawError(status_code, content)


subscribe_to_website_newsletter_error_mapper: Final[
    ErrorMapper[SubscribeToWebsiteNewsletterErrorBody]
] = _SubscribeToWebsiteNewsletterError()

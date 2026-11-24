from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

FetchPartnerWebhookErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _FetchPartnerWebhookError:
    def map(self, status_code: int, content: bytes) -> FetchPartnerWebhookErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


fetch_partner_webhook_error_mapper: Final[ErrorMapper[FetchPartnerWebhookErrorBody]] = _FetchPartnerWebhookError()

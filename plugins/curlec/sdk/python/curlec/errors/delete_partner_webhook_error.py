from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeletePartnerWebhookErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeletePartnerWebhookError:
    def map(self, status_code: int, content: bytes) -> DeletePartnerWebhookErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_partner_webhook_error_mapper: Final[ErrorMapper[DeletePartnerWebhookErrorBody]] = _DeletePartnerWebhookError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

SendInvoiceNotificationErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _SendInvoiceNotificationError:
    def map(self, status_code: int, content: bytes) -> SendInvoiceNotificationErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


send_invoice_notification_error_mapper: Final[
    ErrorMapper[SendInvoiceNotificationErrorBody]
] = _SendInvoiceNotificationError()

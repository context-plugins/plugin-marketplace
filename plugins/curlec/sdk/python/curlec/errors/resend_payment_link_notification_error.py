from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ResendPaymentLinkNotificationErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ResendPaymentLinkNotificationError:
    def map(self, status_code: int, content: bytes) -> ResendPaymentLinkNotificationErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


resend_payment_link_notification_error_mapper: Final[
    ErrorMapper[ResendPaymentLinkNotificationErrorBody]
] = _ResendPaymentLinkNotificationError()

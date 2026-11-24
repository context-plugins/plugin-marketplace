from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error400 import Error400
from ..models.error400_payments_refund import Error400PaymentsRefund
from ..models.error403 import Error403
from ..models.error404_no_such_payment import Error404NoSuchPayment

PostPaymentRefundErrorBody: TypeAlias = (
    Error400PaymentsRefund | Error403 | Error404NoSuchPayment | Error400 | str | RawError
)


@dataclass(frozen=True, slots=True)
class _PostPaymentRefundError:
    def map(self, status_code: int, content: bytes) -> PostPaymentRefundErrorBody:
        match status_code:
            case 400:
                return decode_json[Error400PaymentsRefund](content)
            case 401 | 403:
                return decode_json[Error403](content)
            case 404:
                return decode_json[Error404NoSuchPayment](content)
            case 409:
                return decode_json[Error400](content)
            case 500:
                return decode_json[str](content)
            case _:
                return RawError(status_code, content)


post_payment_refund_error_mapper: Final[ErrorMapper[PostPaymentRefundErrorBody]] = _PostPaymentRefundError()

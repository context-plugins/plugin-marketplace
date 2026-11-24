from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error400_payments_close import Error400PaymentsClose
from ..models.error403 import Error403
from ..models.error404_no_such_payment import Error404NoSuchPayment

ClosePaymentErrorBody: TypeAlias = Error400PaymentsClose | Error403 | Error404NoSuchPayment | str | RawError


@dataclass(frozen=True, slots=True)
class _ClosePaymentError:
    def map(self, status_code: int, content: bytes) -> ClosePaymentErrorBody:
        match status_code:
            case 400:
                return decode_json[Error400PaymentsClose](content)
            case 401 | 403:
                return decode_json[Error403](content)
            case 404:
                return decode_json[Error404NoSuchPayment](content)
            case 500:
                return decode_json[str](content)
            case _:
                return RawError(status_code, content)


close_payment_error_mapper: Final[ErrorMapper[ClosePaymentErrorBody]] = _ClosePaymentError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error400_payments_get import Error400PaymentsGet
from ..models.error403 import Error403
from ..models.error404_no_such_payment import Error404NoSuchPayment

PutPaymentErrorBody: TypeAlias = Error400PaymentsGet | Error403 | Error404NoSuchPayment | str | RawError


@dataclass(frozen=True, slots=True)
class _PutPaymentError:
    def map(self, status_code: int, content: bytes) -> PutPaymentErrorBody:
        match status_code:
            case 400:
                return decode_json[Error400PaymentsGet](content)
            case 401 | 403:
                return decode_json[Error403](content)
            case 404:
                return decode_json[Error404NoSuchPayment](content)
            case 500:
                return decode_json[str](content)
            case _:
                return RawError(status_code, content)


put_payment_error_mapper: Final[ErrorMapper[PutPaymentErrorBody]] = _PutPaymentError()

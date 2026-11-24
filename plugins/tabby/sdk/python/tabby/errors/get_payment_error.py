from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error400_payments_get import Error400PaymentsGet
from ..models.error401_missing_bearer import Error401MissingBearer
from ..models.error404_no_such_payment import Error404NoSuchPayment

GetPaymentErrorBody: TypeAlias = Error400PaymentsGet | Error401MissingBearer | Error404NoSuchPayment | str | RawError


@dataclass(frozen=True, slots=True)
class _GetPaymentError:
    def map(self, status_code: int, content: bytes) -> GetPaymentErrorBody:
        match status_code:
            case 400:
                return decode_json[Error400PaymentsGet](content)
            case 401:
                return decode_json[Error401MissingBearer](content)
            case 404:
                return decode_json[Error404NoSuchPayment](content)
            case 500:
                return decode_json[str](content)
            case _:
                return RawError(status_code, content)


get_payment_error_mapper: Final[ErrorMapper[GetPaymentErrorBody]] = _GetPaymentError()

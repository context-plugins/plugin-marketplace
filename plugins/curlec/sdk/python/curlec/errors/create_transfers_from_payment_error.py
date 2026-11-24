from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateTransfersFromPaymentErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateTransfersFromPaymentError:
    def map(self, status_code: int, content: bytes) -> CreateTransfersFromPaymentErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_transfers_from_payment_error_mapper: Final[
    ErrorMapper[CreateTransfersFromPaymentErrorBody]
] = _CreateTransfersFromPaymentError()

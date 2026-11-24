from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.billing_transfer_problem_details import BillingTransferProblemDetails
from ..models.error import Error

CreateBillingTransferResellerHandshakesErrorBody: TypeAlias = Error | BillingTransferProblemDetails | RawError


@dataclass(frozen=True, slots=True)
class _CreateBillingTransferResellerHandshakesError:
    def map(self, status_code: int, content: bytes) -> CreateBillingTransferResellerHandshakesErrorBody:
        match status_code:
            case 400 | 401 | 500:
                return decode_json[Error](content)
            case 403 | 422 | 502:
                return decode_json[BillingTransferProblemDetails](content)
            case _:
                return RawError(status_code, content)


create_billing_transfer_reseller_handshakes_error_mapper: Final[
    ErrorMapper[CreateBillingTransferResellerHandshakesErrorBody]
] = _CreateBillingTransferResellerHandshakesError()

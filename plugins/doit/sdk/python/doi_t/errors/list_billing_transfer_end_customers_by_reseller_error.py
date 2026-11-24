from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.billing_transfer_problem_details import BillingTransferProblemDetails
from ..models.error import Error

ListBillingTransferEndCustomersByResellerErrorBody: TypeAlias = Error | BillingTransferProblemDetails | RawError


@dataclass(frozen=True, slots=True)
class _ListBillingTransferEndCustomersByResellerError:
    def map(self, status_code: int, content: bytes) -> ListBillingTransferEndCustomersByResellerErrorBody:
        match status_code:
            case 400 | 401 | 500:
                return decode_json[Error](content)
            case 403 | 404:
                return decode_json[BillingTransferProblemDetails](content)
            case _:
                return RawError(status_code, content)


list_billing_transfer_end_customers_by_reseller_error_mapper: Final[
    ErrorMapper[ListBillingTransferEndCustomersByResellerErrorBody]
] = _ListBillingTransferEndCustomersByResellerError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.billing_transfer_problem_details import BillingTransferProblemDetails
from ..models.error import Error

ListBillingTransferResellerAccountsErrorBody: TypeAlias = Error | BillingTransferProblemDetails | RawError


@dataclass(frozen=True, slots=True)
class _ListBillingTransferResellerAccountsError:
    def map(self, status_code: int, content: bytes) -> ListBillingTransferResellerAccountsErrorBody:
        match status_code:
            case 400 | 401 | 500:
                return decode_json[Error](content)
            case 403:
                return decode_json[BillingTransferProblemDetails](content)
            case _:
                return RawError(status_code, content)


list_billing_transfer_reseller_accounts_error_mapper: Final[
    ErrorMapper[ListBillingTransferResellerAccountsErrorBody]
] = _ListBillingTransferResellerAccountsError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListBillingTransferProgramManagementAccountsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListBillingTransferProgramManagementAccountsError:
    def map(self, status_code: int, content: bytes) -> ListBillingTransferProgramManagementAccountsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_billing_transfer_program_management_accounts_error_mapper: Final[
    ErrorMapper[ListBillingTransferProgramManagementAccountsErrorBody]
] = _ListBillingTransferProgramManagementAccountsError()

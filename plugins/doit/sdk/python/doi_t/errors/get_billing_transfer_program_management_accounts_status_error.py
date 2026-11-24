from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetBillingTransferProgramManagementAccountsStatusErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetBillingTransferProgramManagementAccountsStatusError:
    def map(self, status_code: int, content: bytes) -> GetBillingTransferProgramManagementAccountsStatusErrorBody:
        match status_code:
            case 400 | 401 | 403 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_billing_transfer_program_management_accounts_status_error_mapper: Final[
    ErrorMapper[GetBillingTransferProgramManagementAccountsStatusErrorBody]
] = _GetBillingTransferProgramManagementAccountsStatusError()

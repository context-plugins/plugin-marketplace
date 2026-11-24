from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem_details import ProblemDetails

ListGcpBillingAccountsErrorBody: TypeAlias = ProblemDetails | RawError


@dataclass(frozen=True, slots=True)
class _ListGcpBillingAccountsError:
    def map(self, status_code: int, content: bytes) -> ListGcpBillingAccountsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 500 | 503:
                return decode_json[ProblemDetails](content)
            case _:
                return RawError(status_code, content)


list_gcp_billing_accounts_error_mapper: Final[
    ErrorMapper[ListGcpBillingAccountsErrorBody]
] = _ListGcpBillingAccountsError()

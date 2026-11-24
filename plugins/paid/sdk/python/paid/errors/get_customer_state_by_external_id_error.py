from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetCustomerStateByExternalIdErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetCustomerStateByExternalIdError:
    def map(self, status_code: int, content: bytes) -> GetCustomerStateByExternalIdErrorBody:
        match status_code:
            case 403 | 404 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_customer_state_by_external_id_error_mapper: Final[
    ErrorMapper[GetCustomerStateByExternalIdErrorBody]
] = _GetCustomerStateByExternalIdError()

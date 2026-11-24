from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

CreateCustomerGroupErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _CreateCustomerGroupError:
    def map(self, status_code: int, content: bytes) -> CreateCustomerGroupErrorBody:
        match status_code:
            case 400 | 409 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


create_customer_group_error_mapper: Final[ErrorMapper[CreateCustomerGroupErrorBody]] = _CreateCustomerGroupError()

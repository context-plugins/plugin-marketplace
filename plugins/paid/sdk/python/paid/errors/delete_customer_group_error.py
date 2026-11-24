from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

DeleteCustomerGroupErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _DeleteCustomerGroupError:
    def map(self, status_code: int, content: bytes) -> DeleteCustomerGroupErrorBody:
        match status_code:
            case 404 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


delete_customer_group_error_mapper: Final[ErrorMapper[DeleteCustomerGroupErrorBody]] = _DeleteCustomerGroupError()

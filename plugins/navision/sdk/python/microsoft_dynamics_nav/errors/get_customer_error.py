from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetCustomerErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetCustomerError:
    def map(self, status_code: int, content: bytes) -> GetCustomerErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_customer_error_mapper: Final[ErrorMapper[GetCustomerErrorBody]] = _GetCustomerError()

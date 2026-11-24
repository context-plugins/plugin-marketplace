from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

CreateCustomerPortalErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _CreateCustomerPortalError:
    def map(self, status_code: int, content: bytes) -> CreateCustomerPortalErrorBody:
        match status_code:
            case 400 | 403 | 404 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


create_customer_portal_error_mapper: Final[ErrorMapper[CreateCustomerPortalErrorBody]] = _CreateCustomerPortalError()

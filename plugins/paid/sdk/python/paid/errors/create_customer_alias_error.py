from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

CreateCustomerAliasErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _CreateCustomerAliasError:
    def map(self, status_code: int, content: bytes) -> CreateCustomerAliasErrorBody:
        match status_code:
            case 400 | 403 | 404 | 409 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


create_customer_alias_error_mapper: Final[ErrorMapper[CreateCustomerAliasErrorBody]] = _CreateCustomerAliasError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListCustomerAliasesErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListCustomerAliasesError:
    def map(self, status_code: int, content: bytes) -> ListCustomerAliasesErrorBody:
        match status_code:
            case 400 | 403 | 404 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_customer_aliases_error_mapper: Final[ErrorMapper[ListCustomerAliasesErrorBody]] = _ListCustomerAliasesError()

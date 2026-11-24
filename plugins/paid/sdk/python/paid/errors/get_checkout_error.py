from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetCheckoutErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetCheckoutError:
    def map(self, status_code: int, content: bytes) -> GetCheckoutErrorBody:
        match status_code:
            case 403 | 404 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_checkout_error_mapper: Final[ErrorMapper[GetCheckoutErrorBody]] = _GetCheckoutError()

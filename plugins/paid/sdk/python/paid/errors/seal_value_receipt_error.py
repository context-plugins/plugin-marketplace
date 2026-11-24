from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

SealValueReceiptErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _SealValueReceiptError:
    def map(self, status_code: int, content: bytes) -> SealValueReceiptErrorBody:
        match status_code:
            case 404 | 409 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


seal_value_receipt_error_mapper: Final[ErrorMapper[SealValueReceiptErrorBody]] = _SealValueReceiptError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetReceiptErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetReceiptError:
    def map(self, status_code: int, content: bytes) -> GetReceiptErrorBody:
        match status_code:
            case 400 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_receipt_error_mapper: Final[ErrorMapper[GetReceiptErrorBody]] = _GetReceiptError()

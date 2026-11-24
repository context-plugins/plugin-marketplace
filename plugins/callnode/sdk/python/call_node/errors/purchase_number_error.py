from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PurchaseNumberErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PurchaseNumberError:
    def map(self, status_code: int, content: bytes) -> PurchaseNumberErrorBody:
        match status_code:
            case 400 | 401 | 402 | 409 | 502:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


purchase_number_error_mapper: Final[ErrorMapper[PurchaseNumberErrorBody]] = _PurchaseNumberError()

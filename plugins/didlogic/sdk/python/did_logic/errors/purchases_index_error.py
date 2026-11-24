from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_purchases403_error1 import ApiV1Purchases403Error1

PurchasesIndexErrorBody: TypeAlias = ApiV1Purchases403Error1 | RawError


@dataclass(frozen=True, slots=True)
class _PurchasesIndexError:
    def map(self, status_code: int, content: bytes) -> PurchasesIndexErrorBody:
        match status_code:
            case 403:
                return decode_json[ApiV1Purchases403Error1](content)
            case _:
                return RawError(status_code, content)


purchases_index_error_mapper: Final[ErrorMapper[PurchasesIndexErrorBody]] = _PurchasesIndexError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_numbers_purchase401_error1 import ApiV2NumbersPurchase401Error1
from ..models.error import Error

NumbersPurchaseUpdateErrorBody: TypeAlias = ApiV2NumbersPurchase401Error1 | Error | RawError


@dataclass(frozen=True, slots=True)
class _NumbersPurchaseUpdateError:
    def map(self, status_code: int, content: bytes) -> NumbersPurchaseUpdateErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiV2NumbersPurchase401Error1](content)
            case 422 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


numbers_purchase_update_error_mapper: Final[ErrorMapper[NumbersPurchaseUpdateErrorBody]] = _NumbersPurchaseUpdateError()

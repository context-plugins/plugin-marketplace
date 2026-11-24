from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_numbers_purchase400_error1 import ApiV2NumbersPurchase400Error1
from ..models.api_v2_numbers_purchase401_error1 import ApiV2NumbersPurchase401Error1
from ..models.unions.api_v2_numbers_purchase_response11 import ApiV2NumbersPurchaseResponse11

NumbersPurchaseCreateErrorBody: TypeAlias = (
    ApiV2NumbersPurchase400Error1 | ApiV2NumbersPurchase401Error1 | ApiV2NumbersPurchaseResponse11 | RawError
)


@dataclass(frozen=True, slots=True)
class _NumbersPurchaseCreateError:
    def map(self, status_code: int, content: bytes) -> NumbersPurchaseCreateErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV2NumbersPurchase400Error1](content)
            case 401:
                return decode_json[ApiV2NumbersPurchase401Error1](content)
            case 422:
                return decode_json[ApiV2NumbersPurchaseResponse11](content)
            case _:
                return RawError(status_code, content)


numbers_purchase_create_error_mapper: Final[ErrorMapper[NumbersPurchaseCreateErrorBody]] = _NumbersPurchaseCreateError()

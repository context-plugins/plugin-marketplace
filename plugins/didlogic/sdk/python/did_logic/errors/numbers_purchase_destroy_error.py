from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_numbers_purchase401_error1 import ApiV2NumbersPurchase401Error1
from ..models.api_v2_numbers_purchase403_error1 import ApiV2NumbersPurchase403Error1
from ..models.error import Error

NumbersPurchaseDestroyErrorBody: TypeAlias = (
    ApiV2NumbersPurchase401Error1 | ApiV2NumbersPurchase403Error1 | Error | RawError
)


@dataclass(frozen=True, slots=True)
class _NumbersPurchaseDestroyError:
    def map(self, status_code: int, content: bytes) -> NumbersPurchaseDestroyErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiV2NumbersPurchase401Error1](content)
            case 403:
                return decode_json[ApiV2NumbersPurchase403Error1](content)
            case 422:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


numbers_purchase_destroy_error_mapper: Final[
    ErrorMapper[NumbersPurchaseDestroyErrorBody]
] = _NumbersPurchaseDestroyError()

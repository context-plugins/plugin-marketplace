from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_call_price404_error1 import ApiV1CallPrice404Error1
from ..models.api_v1_call_price422_error1 import ApiV1CallPrice422Error1

CallPriceShowErrorBody: TypeAlias = ApiV1CallPrice404Error1 | ApiV1CallPrice422Error1 | RawError


@dataclass(frozen=True, slots=True)
class _CallPriceShowError:
    def map(self, status_code: int, content: bytes) -> CallPriceShowErrorBody:
        match status_code:
            case 404:
                return decode_json[ApiV1CallPrice404Error1](content)
            case 422:
                return decode_json[ApiV1CallPrice422Error1](content)
            case _:
                return RawError(status_code, content)


call_price_show_error_mapper: Final[ErrorMapper[CallPriceShowErrorBody]] = _CallPriceShowError()

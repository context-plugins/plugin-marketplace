from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_purchases_destinations403_error1 import ApiV1PurchasesDestinations403Error1
from ..models.error import Error

PurchasesDestinationsCreateErrorBody: TypeAlias = ApiV1PurchasesDestinations403Error1 | Error | RawError


@dataclass(frozen=True, slots=True)
class _PurchasesDestinationsCreateError:
    def map(self, status_code: int, content: bytes) -> PurchasesDestinationsCreateErrorBody:
        match status_code:
            case 403:
                return decode_json[ApiV1PurchasesDestinations403Error1](content)
            case 404 | 422:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


purchases_destinations_create_error_mapper: Final[
    ErrorMapper[PurchasesDestinationsCreateErrorBody]
] = _PurchasesDestinationsCreateError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_purchases_destinations403_error1 import ApiV1PurchasesDestinations403Error1
from ..models.unions.api_v1_purchases_destinations_response31 import ApiV1PurchasesDestinationsResponse31

PurchasesDestinationsUpdateErrorBody: TypeAlias = (
    ApiV1PurchasesDestinations403Error1 | ApiV1PurchasesDestinationsResponse31 | RawError
)


@dataclass(frozen=True, slots=True)
class _PurchasesDestinationsUpdateError:
    def map(self, status_code: int, content: bytes) -> PurchasesDestinationsUpdateErrorBody:
        match status_code:
            case 403:
                return decode_json[ApiV1PurchasesDestinations403Error1](content)
            case 404:
                return decode_json[ApiV1PurchasesDestinationsResponse31](content)
            case _:
                return RawError(status_code, content)


purchases_destinations_update_error_mapper: Final[
    ErrorMapper[PurchasesDestinationsUpdateErrorBody]
] = _PurchasesDestinationsUpdateError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

FindDeliveryStoresErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _FindDeliveryStoresError:
    def map(self, status_code: int, content: bytes) -> FindDeliveryStoresErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


find_delivery_stores_error_mapper: Final[ErrorMapper[FindDeliveryStoresErrorBody]] = _FindDeliveryStoresError()

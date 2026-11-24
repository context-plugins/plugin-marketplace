from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

FindPickupStoresErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _FindPickupStoresError:
    def map(self, status_code: int, content: bytes) -> FindPickupStoresErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


find_pickup_stores_error_mapper: Final[ErrorMapper[FindPickupStoresErrorBody]] = _FindPickupStoresError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateWholesaleDeliveryErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateWholesaleDeliveryError:
    def map(self, status_code: int, content: bytes) -> UpdateWholesaleDeliveryErrorBody:
        match status_code:
            case 400 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_wholesale_delivery_error_mapper: Final[
    ErrorMapper[UpdateWholesaleDeliveryErrorBody]
] = _UpdateWholesaleDeliveryError()

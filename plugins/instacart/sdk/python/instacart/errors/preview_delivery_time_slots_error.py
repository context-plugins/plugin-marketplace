from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PreviewDeliveryTimeSlotsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PreviewDeliveryTimeSlotsError:
    def map(self, status_code: int, content: bytes) -> PreviewDeliveryTimeSlotsErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


preview_delivery_time_slots_error_mapper: Final[
    ErrorMapper[PreviewDeliveryTimeSlotsErrorBody]
] = _PreviewDeliveryTimeSlotsError()

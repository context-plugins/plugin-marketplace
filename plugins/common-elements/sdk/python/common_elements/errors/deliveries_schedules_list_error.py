from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeliveriesSchedulesListErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeliveriesSchedulesListError:
    def map(self, status_code: int, content: bytes) -> DeliveriesSchedulesListErrorBody:
        match status_code:
            case 401 | 403 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


deliveries_schedules_list_error_mapper: Final[
    ErrorMapper[DeliveriesSchedulesListErrorBody]
] = _DeliveriesSchedulesListError()

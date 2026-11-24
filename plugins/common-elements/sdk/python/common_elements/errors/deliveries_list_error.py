from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeliveriesListErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeliveriesListError:
    def map(self, status_code: int, content: bytes) -> DeliveriesListErrorBody:
        match status_code:
            case 401 | 403 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


deliveries_list_error_mapper: Final[ErrorMapper[DeliveriesListErrorBody]] = _DeliveriesListError()

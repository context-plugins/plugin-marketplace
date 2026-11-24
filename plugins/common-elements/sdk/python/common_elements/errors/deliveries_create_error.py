from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeliveriesCreateErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeliveriesCreateError:
    def map(self, status_code: int, content: bytes) -> DeliveriesCreateErrorBody:
        match status_code:
            case 400 | 401 | 403 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


deliveries_create_error_mapper: Final[ErrorMapper[DeliveriesCreateErrorBody]] = _DeliveriesCreateError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

RetryFormDeliveriesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _RetryFormDeliveriesError:
    def map(self, status_code: int, content: bytes) -> RetryFormDeliveriesErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 413 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


retry_form_deliveries_error_mapper: Final[ErrorMapper[RetryFormDeliveriesErrorBody]] = _RetryFormDeliveriesError()

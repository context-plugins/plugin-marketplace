from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

BulkGeolocationErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _BulkGeolocationError:
    def map(self, status_code: int, content: bytes) -> BulkGeolocationErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


bulk_geolocation_error_mapper: Final[ErrorMapper[BulkGeolocationErrorBody]] = _BulkGeolocationError()

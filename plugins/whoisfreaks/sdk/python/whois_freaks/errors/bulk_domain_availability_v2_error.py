from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

BulkDomainAvailabilityV2ErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _BulkDomainAvailabilityV2Error:
    def map(self, status_code: int, content: bytes) -> BulkDomainAvailabilityV2ErrorBody:
        match status_code:
            case 400 | 401 | 429:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


bulk_domain_availability_v2_error_mapper: Final[
    ErrorMapper[BulkDomainAvailabilityV2ErrorBody]
] = _BulkDomainAvailabilityV2Error()

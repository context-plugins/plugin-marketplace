from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

DomainAvailabilityV2ErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _DomainAvailabilityV2Error:
    def map(self, status_code: int, content: bytes) -> DomainAvailabilityV2ErrorBody:
        match status_code:
            case 400 | 401 | 429:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


domain_availability_v2_error_mapper: Final[ErrorMapper[DomainAvailabilityV2ErrorBody]] = _DomainAvailabilityV2Error()

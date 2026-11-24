from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

DomainReputationErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _DomainReputationError:
    def map(self, status_code: int, content: bytes) -> DomainReputationErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


domain_reputation_error_mapper: Final[ErrorMapper[DomainReputationErrorBody]] = _DomainReputationError()

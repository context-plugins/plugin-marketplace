from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateAcmeDomainValidationErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateAcmeDomainValidationError:
    def map(self, status_code: int, content: bytes) -> CreateAcmeDomainValidationErrorBody:
        match status_code:
            case 400 | 403 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_acme_domain_validation_error_mapper: Final[
    ErrorMapper[CreateAcmeDomainValidationErrorBody]
] = _CreateAcmeDomainValidationError()

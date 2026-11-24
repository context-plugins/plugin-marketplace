from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteAcmeDomainValidationErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteAcmeDomainValidationError:
    def map(self, status_code: int, content: bytes) -> DeleteAcmeDomainValidationErrorBody:
        match status_code:
            case 400 | 403 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_acme_domain_validation_error_mapper: Final[
    ErrorMapper[DeleteAcmeDomainValidationErrorBody]
] = _DeleteAcmeDomainValidationError()

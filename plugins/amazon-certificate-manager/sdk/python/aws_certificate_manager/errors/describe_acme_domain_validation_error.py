from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeAcmeDomainValidationErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeAcmeDomainValidationError:
    def map(self, status_code: int, content: bytes) -> DescribeAcmeDomainValidationErrorBody:
        match status_code:
            case 400 | 403 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_acme_domain_validation_error_mapper: Final[
    ErrorMapper[DescribeAcmeDomainValidationErrorBody]
] = _DescribeAcmeDomainValidationError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeDomainErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeDomainError:
    def map(self, status_code: int, content: bytes) -> DescribeDomainErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_domain_error_mapper: Final[ErrorMapper[DescribeDomainErrorBody]] = _DescribeDomainError()

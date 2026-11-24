from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeprecateDomainErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeprecateDomainError:
    def map(self, status_code: int, content: bytes) -> DeprecateDomainErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


deprecate_domain_error_mapper: Final[ErrorMapper[DeprecateDomainErrorBody]] = _DeprecateDomainError()

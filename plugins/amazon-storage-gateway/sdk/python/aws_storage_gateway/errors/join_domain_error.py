from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

JoinDomainErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _JoinDomainError:
    def map(self, status_code: int, content: bytes) -> JoinDomainErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


join_domain_error_mapper: Final[ErrorMapper[JoinDomainErrorBody]] = _JoinDomainError()

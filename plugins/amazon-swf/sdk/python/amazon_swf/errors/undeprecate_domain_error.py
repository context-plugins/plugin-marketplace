from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UndeprecateDomainErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UndeprecateDomainError:
    def map(self, status_code: int, content: bytes) -> UndeprecateDomainErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


undeprecate_domain_error_mapper: Final[ErrorMapper[UndeprecateDomainErrorBody]] = _UndeprecateDomainError()

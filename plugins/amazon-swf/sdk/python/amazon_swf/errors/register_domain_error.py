from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RegisterDomainErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RegisterDomainError:
    def map(self, status_code: int, content: bytes) -> RegisterDomainErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


register_domain_error_mapper: Final[ErrorMapper[RegisterDomainErrorBody]] = _RegisterDomainError()

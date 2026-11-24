from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListAcmeDomainValidationsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListAcmeDomainValidationsError:
    def map(self, status_code: int, content: bytes) -> ListAcmeDomainValidationsErrorBody:
        match status_code:
            case 400 | 403 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_acme_domain_validations_error_mapper: Final[
    ErrorMapper[ListAcmeDomainValidationsErrorBody]
] = _ListAcmeDomainValidationsError()

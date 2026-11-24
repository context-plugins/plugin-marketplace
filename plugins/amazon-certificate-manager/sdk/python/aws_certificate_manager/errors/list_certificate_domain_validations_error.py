from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListCertificateDomainValidationsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListCertificateDomainValidationsError:
    def map(self, status_code: int, content: bytes) -> ListCertificateDomainValidationsErrorBody:
        match status_code:
            case 400 | 403:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_certificate_domain_validations_error_mapper: Final[
    ErrorMapper[ListCertificateDomainValidationsErrorBody]
] = _ListCertificateDomainValidationsError()

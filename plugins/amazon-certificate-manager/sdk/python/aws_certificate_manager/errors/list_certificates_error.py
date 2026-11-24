from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListCertificatesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListCertificatesError:
    def map(self, status_code: int, content: bytes) -> ListCertificatesErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_certificates_error_mapper: Final[ErrorMapper[ListCertificatesErrorBody]] = _ListCertificatesError()

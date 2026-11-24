from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

SearchCertificatesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _SearchCertificatesError:
    def map(self, status_code: int, content: bytes) -> SearchCertificatesErrorBody:
        match status_code:
            case 400 | 403:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


search_certificates_error_mapper: Final[ErrorMapper[SearchCertificatesErrorBody]] = _SearchCertificatesError()

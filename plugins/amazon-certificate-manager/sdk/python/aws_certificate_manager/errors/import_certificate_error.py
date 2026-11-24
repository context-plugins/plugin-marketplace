from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ImportCertificateErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ImportCertificateError:
    def map(self, status_code: int, content: bytes) -> ImportCertificateErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


import_certificate_error_mapper: Final[ErrorMapper[ImportCertificateErrorBody]] = _ImportCertificateError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ExportCertificateErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ExportCertificateError:
    def map(self, status_code: int, content: bytes) -> ExportCertificateErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


export_certificate_error_mapper: Final[ErrorMapper[ExportCertificateErrorBody]] = _ExportCertificateError()

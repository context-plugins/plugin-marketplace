from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteCertificateErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteCertificateError:
    def map(self, status_code: int, content: bytes) -> DeleteCertificateErrorBody:
        match status_code:
            case 400 | 403:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_certificate_error_mapper: Final[ErrorMapper[DeleteCertificateErrorBody]] = _DeleteCertificateError()

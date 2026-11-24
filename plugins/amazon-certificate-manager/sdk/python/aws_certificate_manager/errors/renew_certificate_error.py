from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RenewCertificateErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RenewCertificateError:
    def map(self, status_code: int, content: bytes) -> RenewCertificateErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


renew_certificate_error_mapper: Final[ErrorMapper[RenewCertificateErrorBody]] = _RenewCertificateError()

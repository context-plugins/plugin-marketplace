from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RequestCertificateErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RequestCertificateError:
    def map(self, status_code: int, content: bytes) -> RequestCertificateErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


request_certificate_error_mapper: Final[ErrorMapper[RequestCertificateErrorBody]] = _RequestCertificateError()

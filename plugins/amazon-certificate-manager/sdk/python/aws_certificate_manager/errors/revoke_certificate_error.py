from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RevokeCertificateErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RevokeCertificateError:
    def map(self, status_code: int, content: bytes) -> RevokeCertificateErrorBody:
        match status_code:
            case 400 | 403:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


revoke_certificate_error_mapper: Final[ErrorMapper[RevokeCertificateErrorBody]] = _RevokeCertificateError()

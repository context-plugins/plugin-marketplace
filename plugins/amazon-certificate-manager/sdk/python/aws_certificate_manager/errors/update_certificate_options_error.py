from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateCertificateOptionsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateCertificateOptionsError:
    def map(self, status_code: int, content: bytes) -> UpdateCertificateOptionsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_certificate_options_error_mapper: Final[
    ErrorMapper[UpdateCertificateOptionsErrorBody]
] = _UpdateCertificateOptionsError()

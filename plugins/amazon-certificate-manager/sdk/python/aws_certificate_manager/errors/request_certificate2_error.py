from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RequestCertificate2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RequestCertificate2Error:
    def map(self, status_code: int, content: bytes) -> RequestCertificate2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


request_certificate2_error_mapper: Final[ErrorMapper[RequestCertificate2ErrorBody]] = _RequestCertificate2Error()

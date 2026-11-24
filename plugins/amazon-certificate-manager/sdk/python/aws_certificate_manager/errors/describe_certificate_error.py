from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeCertificateErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeCertificateError:
    def map(self, status_code: int, content: bytes) -> DescribeCertificateErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_certificate_error_mapper: Final[ErrorMapper[DescribeCertificateErrorBody]] = _DescribeCertificateError()

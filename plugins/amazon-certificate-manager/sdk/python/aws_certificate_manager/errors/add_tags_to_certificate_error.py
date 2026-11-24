from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AddTagsToCertificateErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AddTagsToCertificateError:
    def map(self, status_code: int, content: bytes) -> AddTagsToCertificateErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


add_tags_to_certificate_error_mapper: Final[ErrorMapper[AddTagsToCertificateErrorBody]] = _AddTagsToCertificateError()

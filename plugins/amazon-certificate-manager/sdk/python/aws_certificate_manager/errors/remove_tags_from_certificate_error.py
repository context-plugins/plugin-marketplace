from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RemoveTagsFromCertificateErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RemoveTagsFromCertificateError:
    def map(self, status_code: int, content: bytes) -> RemoveTagsFromCertificateErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


remove_tags_from_certificate_error_mapper: Final[
    ErrorMapper[RemoveTagsFromCertificateErrorBody]
] = _RemoveTagsFromCertificateError()

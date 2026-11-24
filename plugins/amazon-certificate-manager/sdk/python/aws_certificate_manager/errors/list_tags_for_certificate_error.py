from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListTagsForCertificateErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListTagsForCertificateError:
    def map(self, status_code: int, content: bytes) -> ListTagsForCertificateErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_tags_for_certificate_error_mapper: Final[
    ErrorMapper[ListTagsForCertificateErrorBody]
] = _ListTagsForCertificateError()

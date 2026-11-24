from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json

UploadAdditionalDocErrorBody: TypeAlias = Any | RawError


@dataclass(frozen=True, slots=True)
class _UploadAdditionalDocError:
    def map(self, status_code: int, content: bytes) -> UploadAdditionalDocErrorBody:
        match status_code:
            case 400:
                return decode_json[Any](content)
            case _:
                return RawError(status_code, content)


upload_additional_doc_error_mapper: Final[ErrorMapper[UploadAdditionalDocErrorBody]] = _UploadAdditionalDocError()

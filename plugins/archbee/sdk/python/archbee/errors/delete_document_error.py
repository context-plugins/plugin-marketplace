from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.doc400_error1 import Doc400Error1

DeleteDocumentErrorBody: TypeAlias = Doc400Error1 | RawError


@dataclass(frozen=True, slots=True)
class _DeleteDocumentError:
    def map(self, status_code: int, content: bytes) -> DeleteDocumentErrorBody:
        match status_code:
            case 400:
                return decode_json[Doc400Error1](content)
            case _:
                return RawError(status_code, content)


delete_document_error_mapper: Final[ErrorMapper[DeleteDocumentErrorBody]] = _DeleteDocumentError()

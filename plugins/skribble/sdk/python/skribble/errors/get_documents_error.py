from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem import Problem

GetDocumentsErrorBody: TypeAlias = Problem | RawError


@dataclass(frozen=True, slots=True)
class _GetDocumentsError:
    def map(self, status_code: int, content: bytes) -> GetDocumentsErrorBody:
        match status_code:
            case 400 | 401 | 406 | 429 | 500 | 503:
                return decode_json[Problem](content)
            case _:
                return RawError(status_code, content)


get_documents_error_mapper: Final[ErrorMapper[GetDocumentsErrorBody]] = _GetDocumentsError()

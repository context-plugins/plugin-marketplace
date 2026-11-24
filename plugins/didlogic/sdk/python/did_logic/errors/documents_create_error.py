from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_documents401_error1 import ApiV2Documents401Error1
from ..models.error import Error

DocumentsCreateErrorBody: TypeAlias = ApiV2Documents401Error1 | Error | RawError


@dataclass(frozen=True, slots=True)
class _DocumentsCreateError:
    def map(self, status_code: int, content: bytes) -> DocumentsCreateErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiV2Documents401Error1](content)
            case 422:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


documents_create_error_mapper: Final[ErrorMapper[DocumentsCreateErrorBody]] = _DocumentsCreateError()

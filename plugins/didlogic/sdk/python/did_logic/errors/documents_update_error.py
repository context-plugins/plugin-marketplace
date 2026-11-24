from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_documents401_error1 import ApiV2Documents401Error1
from ..models.api_v2_documents404_error1 import ApiV2Documents404Error1
from ..models.error import Error

DocumentsUpdateErrorBody: TypeAlias = ApiV2Documents401Error1 | ApiV2Documents404Error1 | Error | RawError


@dataclass(frozen=True, slots=True)
class _DocumentsUpdateError:
    def map(self, status_code: int, content: bytes) -> DocumentsUpdateErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiV2Documents401Error1](content)
            case 404:
                return decode_json[ApiV2Documents404Error1](content)
            case 422:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


documents_update_error_mapper: Final[ErrorMapper[DocumentsUpdateErrorBody]] = _DocumentsUpdateError()

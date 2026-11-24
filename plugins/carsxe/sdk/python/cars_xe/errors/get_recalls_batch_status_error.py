from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetRecallsBatchStatusErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetRecallsBatchStatusError:
    def map(self, status_code: int, content: bytes) -> GetRecallsBatchStatusErrorBody:
        match status_code:
            case 400 | 401 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_recalls_batch_status_error_mapper: Final[
    ErrorMapper[GetRecallsBatchStatusErrorBody]
] = _GetRecallsBatchStatusError()

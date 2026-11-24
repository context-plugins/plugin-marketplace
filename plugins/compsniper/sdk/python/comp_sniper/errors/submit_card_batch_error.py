from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

SubmitCardBatchErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _SubmitCardBatchError:
    def map(self, status_code: int, content: bytes) -> SubmitCardBatchErrorBody:
        match status_code:
            case 400 | 401 | 409 | 429:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


submit_card_batch_error_mapper: Final[ErrorMapper[SubmitCardBatchErrorBody]] = _SubmitCardBatchError()

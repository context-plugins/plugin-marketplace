from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

CancelCardBatchErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _CancelCardBatchError:
    def map(self, status_code: int, content: bytes) -> CancelCardBatchErrorBody:
        match status_code:
            case 404:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


cancel_card_batch_error_mapper: Final[ErrorMapper[CancelCardBatchErrorBody]] = _CancelCardBatchError()

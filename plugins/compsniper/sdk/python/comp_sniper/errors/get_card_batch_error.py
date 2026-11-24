from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

GetCardBatchErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _GetCardBatchError:
    def map(self, status_code: int, content: bytes) -> GetCardBatchErrorBody:
        match status_code:
            case 404:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


get_card_batch_error_mapper: Final[ErrorMapper[GetCardBatchErrorBody]] = _GetCardBatchError()

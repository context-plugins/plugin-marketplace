from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_transactions403_error1 import ApiV1Transactions403Error1
from ..models.error import Error

TransactionsIndexErrorBody: TypeAlias = Error | ApiV1Transactions403Error1 | RawError


@dataclass(frozen=True, slots=True)
class _TransactionsIndexError:
    def map(self, status_code: int, content: bytes) -> TransactionsIndexErrorBody:
        match status_code:
            case 400:
                return decode_json[Error](content)
            case 403:
                return decode_json[ApiV1Transactions403Error1](content)
            case _:
                return RawError(status_code, content)


transactions_index_error_mapper: Final[ErrorMapper[TransactionsIndexErrorBody]] = _TransactionsIndexError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

FetchTransactionErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _FetchTransactionError:
    def map(self, status_code: int, content: bytes) -> FetchTransactionErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


fetch_transaction_error_mapper: Final[ErrorMapper[FetchTransactionErrorBody]] = _FetchTransactionError()

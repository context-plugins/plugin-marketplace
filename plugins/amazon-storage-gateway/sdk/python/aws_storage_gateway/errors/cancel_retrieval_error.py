from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CancelRetrievalErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CancelRetrievalError:
    def map(self, status_code: int, content: bytes) -> CancelRetrievalErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


cancel_retrieval_error_mapper: Final[ErrorMapper[CancelRetrievalErrorBody]] = _CancelRetrievalError()

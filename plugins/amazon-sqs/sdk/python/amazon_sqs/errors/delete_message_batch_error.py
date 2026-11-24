from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteMessageBatchErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteMessageBatchError:
    def map(self, status_code: int, content: bytes) -> DeleteMessageBatchErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_message_batch_error_mapper: Final[ErrorMapper[DeleteMessageBatchErrorBody]] = _DeleteMessageBatchError()

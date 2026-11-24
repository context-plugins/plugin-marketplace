from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

SendMessageBatchErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _SendMessageBatchError:
    def map(self, status_code: int, content: bytes) -> SendMessageBatchErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


send_message_batch_error_mapper: Final[ErrorMapper[SendMessageBatchErrorBody]] = _SendMessageBatchError()

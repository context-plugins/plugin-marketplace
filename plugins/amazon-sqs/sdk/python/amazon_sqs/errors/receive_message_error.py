from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ReceiveMessageErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ReceiveMessageError:
    def map(self, status_code: int, content: bytes) -> ReceiveMessageErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


receive_message_error_mapper: Final[ErrorMapper[ReceiveMessageErrorBody]] = _ReceiveMessageError()

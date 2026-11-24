from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

SendMessageErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _SendMessageError:
    def map(self, status_code: int, content: bytes) -> SendMessageErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


send_message_error_mapper: Final[ErrorMapper[SendMessageErrorBody]] = _SendMessageError()

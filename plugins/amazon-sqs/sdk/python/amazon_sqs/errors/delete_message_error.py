from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteMessageErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteMessageError:
    def map(self, status_code: int, content: bytes) -> DeleteMessageErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_message_error_mapper: Final[ErrorMapper[DeleteMessageErrorBody]] = _DeleteMessageError()

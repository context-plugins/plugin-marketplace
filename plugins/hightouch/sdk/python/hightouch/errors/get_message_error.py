from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetMessageErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetMessageError:
    def map(self, status_code: int, content: bytes) -> GetMessageErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_message_error_mapper: Final[ErrorMapper[GetMessageErrorBody]] = _GetMessageError()

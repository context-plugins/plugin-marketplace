from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetMessageErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetMessageError:
    def map(self, status_code: int, content: bytes) -> GetMessageErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_message_error_mapper: Final[ErrorMapper[GetMessageErrorBody]] = _GetMessageError()

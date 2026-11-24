from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json

GetMessageRequestErrorBody: TypeAlias = Any | RawError


@dataclass(frozen=True, slots=True)
class _GetMessageRequestError:
    def map(self, status_code: int, content: bytes) -> GetMessageRequestErrorBody:
        match status_code:
            case 400:
                return decode_json[Any](content)
            case _:
                return RawError(status_code, content)


get_message_request_error_mapper: Final[ErrorMapper[GetMessageRequestErrorBody]] = _GetMessageRequestError()

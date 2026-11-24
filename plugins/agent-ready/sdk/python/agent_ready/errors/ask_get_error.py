from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

AskGetErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _AskGetError:
    def map(self, status_code: int, content: bytes) -> AskGetErrorBody:
        match status_code:
            case 400 | 429 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


ask_get_error_mapper: Final[ErrorMapper[AskGetErrorBody]] = _AskGetError()

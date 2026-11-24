from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

AskAvaStreamingErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _AskAvaStreamingError:
    def map(self, status_code: int, content: bytes) -> AskAvaStreamingErrorBody:
        match status_code:
            case 400 | 401 | 403 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


ask_ava_streaming_error_mapper: Final[ErrorMapper[AskAvaStreamingErrorBody]] = _AskAvaStreamingError()

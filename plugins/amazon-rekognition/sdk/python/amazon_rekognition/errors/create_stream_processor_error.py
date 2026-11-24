from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateStreamProcessorErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateStreamProcessorError:
    def map(self, status_code: int, content: bytes) -> CreateStreamProcessorErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_stream_processor_error_mapper: Final[ErrorMapper[CreateStreamProcessorErrorBody]] = _CreateStreamProcessorError()

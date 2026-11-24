from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StopStreamProcessorErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StopStreamProcessorError:
    def map(self, status_code: int, content: bytes) -> StopStreamProcessorErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


stop_stream_processor_error_mapper: Final[ErrorMapper[StopStreamProcessorErrorBody]] = _StopStreamProcessorError()

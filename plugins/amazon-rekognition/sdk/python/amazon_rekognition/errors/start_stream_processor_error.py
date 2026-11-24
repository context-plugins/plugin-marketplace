from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartStreamProcessorErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartStreamProcessorError:
    def map(self, status_code: int, content: bytes) -> StartStreamProcessorErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_stream_processor_error_mapper: Final[ErrorMapper[StartStreamProcessorErrorBody]] = _StartStreamProcessorError()

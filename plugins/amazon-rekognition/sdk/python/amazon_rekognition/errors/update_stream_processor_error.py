from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateStreamProcessorErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateStreamProcessorError:
    def map(self, status_code: int, content: bytes) -> UpdateStreamProcessorErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_stream_processor_error_mapper: Final[ErrorMapper[UpdateStreamProcessorErrorBody]] = _UpdateStreamProcessorError()

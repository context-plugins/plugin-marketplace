from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteStreamProcessorErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteStreamProcessorError:
    def map(self, status_code: int, content: bytes) -> DeleteStreamProcessorErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_stream_processor_error_mapper: Final[ErrorMapper[DeleteStreamProcessorErrorBody]] = _DeleteStreamProcessorError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeStreamProcessorErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeStreamProcessorError:
    def map(self, status_code: int, content: bytes) -> DescribeStreamProcessorErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_stream_processor_error_mapper: Final[
    ErrorMapper[DescribeStreamProcessorErrorBody]
] = _DescribeStreamProcessorError()

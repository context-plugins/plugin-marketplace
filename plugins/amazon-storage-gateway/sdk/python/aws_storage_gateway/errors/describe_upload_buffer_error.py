from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeUploadBufferErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeUploadBufferError:
    def map(self, status_code: int, content: bytes) -> DescribeUploadBufferErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_upload_buffer_error_mapper: Final[ErrorMapper[DescribeUploadBufferErrorBody]] = _DescribeUploadBufferError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeWorkingStorageErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeWorkingStorageError:
    def map(self, status_code: int, content: bytes) -> DescribeWorkingStorageErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_working_storage_error_mapper: Final[
    ErrorMapper[DescribeWorkingStorageErrorBody]
] = _DescribeWorkingStorageError()

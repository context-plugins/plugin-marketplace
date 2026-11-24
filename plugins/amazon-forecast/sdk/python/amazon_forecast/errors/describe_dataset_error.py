from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeDatasetErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeDatasetError:
    def map(self, status_code: int, content: bytes) -> DescribeDatasetErrorBody:
        match status_code:
            case 400 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_dataset_error_mapper: Final[ErrorMapper[DescribeDatasetErrorBody]] = _DescribeDatasetError()

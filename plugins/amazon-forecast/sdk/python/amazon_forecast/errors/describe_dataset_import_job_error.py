from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeDatasetImportJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeDatasetImportJobError:
    def map(self, status_code: int, content: bytes) -> DescribeDatasetImportJobErrorBody:
        match status_code:
            case 400 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_dataset_import_job_error_mapper: Final[
    ErrorMapper[DescribeDatasetImportJobErrorBody]
] = _DescribeDatasetImportJobError()

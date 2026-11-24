from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListDatasetImportJobsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListDatasetImportJobsError:
    def map(self, status_code: int, content: bytes) -> ListDatasetImportJobsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_dataset_import_jobs_error_mapper: Final[
    ErrorMapper[ListDatasetImportJobsErrorBody]
] = _ListDatasetImportJobsError()

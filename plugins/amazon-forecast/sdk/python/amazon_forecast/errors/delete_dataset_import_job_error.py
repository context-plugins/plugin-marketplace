from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteDatasetImportJobErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteDatasetImportJobError:
    def map(self, status_code: int, content: bytes) -> DeleteDatasetImportJobErrorBody:
        match status_code:
            case 400 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_dataset_import_job_error_mapper: Final[
    ErrorMapper[DeleteDatasetImportJobErrorBody]
] = _DeleteDatasetImportJobError()

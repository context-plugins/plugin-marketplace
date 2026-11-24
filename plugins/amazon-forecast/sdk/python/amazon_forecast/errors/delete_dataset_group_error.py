from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteDatasetGroupErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteDatasetGroupError:
    def map(self, status_code: int, content: bytes) -> DeleteDatasetGroupErrorBody:
        match status_code:
            case 400 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_dataset_group_error_mapper: Final[ErrorMapper[DeleteDatasetGroupErrorBody]] = _DeleteDatasetGroupError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateDatasetGroupErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateDatasetGroupError:
    def map(self, status_code: int, content: bytes) -> UpdateDatasetGroupErrorBody:
        match status_code:
            case 400 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_dataset_group_error_mapper: Final[ErrorMapper[UpdateDatasetGroupErrorBody]] = _UpdateDatasetGroupError()

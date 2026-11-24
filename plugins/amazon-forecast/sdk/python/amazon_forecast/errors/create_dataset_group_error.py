from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateDatasetGroupErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateDatasetGroupError:
    def map(self, status_code: int, content: bytes) -> CreateDatasetGroupErrorBody:
        match status_code:
            case 400 | 403 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_dataset_group_error_mapper: Final[ErrorMapper[CreateDatasetGroupErrorBody]] = _CreateDatasetGroupError()

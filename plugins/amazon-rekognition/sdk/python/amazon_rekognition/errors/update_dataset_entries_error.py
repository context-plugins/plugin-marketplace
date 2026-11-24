from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateDatasetEntriesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateDatasetEntriesError:
    def map(self, status_code: int, content: bytes) -> UpdateDatasetEntriesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_dataset_entries_error_mapper: Final[ErrorMapper[UpdateDatasetEntriesErrorBody]] = _UpdateDatasetEntriesError()

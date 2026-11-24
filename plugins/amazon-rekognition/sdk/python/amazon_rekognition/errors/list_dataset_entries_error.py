from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListDatasetEntriesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListDatasetEntriesError:
    def map(self, status_code: int, content: bytes) -> ListDatasetEntriesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_dataset_entries_error_mapper: Final[ErrorMapper[ListDatasetEntriesErrorBody]] = _ListDatasetEntriesError()

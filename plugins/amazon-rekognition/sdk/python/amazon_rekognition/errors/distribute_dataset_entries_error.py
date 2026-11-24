from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DistributeDatasetEntriesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DistributeDatasetEntriesError:
    def map(self, status_code: int, content: bytes) -> DistributeDatasetEntriesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


distribute_dataset_entries_error_mapper: Final[
    ErrorMapper[DistributeDatasetEntriesErrorBody]
] = _DistributeDatasetEntriesError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListDatasetGroupsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListDatasetGroupsError:
    def map(self, status_code: int, content: bytes) -> ListDatasetGroupsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_dataset_groups_error_mapper: Final[ErrorMapper[ListDatasetGroupsErrorBody]] = _ListDatasetGroupsError()

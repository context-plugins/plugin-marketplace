from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListDatasetLabelsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListDatasetLabelsError:
    def map(self, status_code: int, content: bytes) -> ListDatasetLabelsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_dataset_labels_error_mapper: Final[ErrorMapper[ListDatasetLabelsErrorBody]] = _ListDatasetLabelsError()

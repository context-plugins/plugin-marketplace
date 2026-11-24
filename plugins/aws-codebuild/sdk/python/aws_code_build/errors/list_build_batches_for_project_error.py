from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListBuildBatchesForProjectErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListBuildBatchesForProjectError:
    def map(self, status_code: int, content: bytes) -> ListBuildBatchesForProjectErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_build_batches_for_project_error_mapper: Final[
    ErrorMapper[ListBuildBatchesForProjectErrorBody]
] = _ListBuildBatchesForProjectError()

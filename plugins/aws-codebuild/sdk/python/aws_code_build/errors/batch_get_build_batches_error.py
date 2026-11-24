from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

BatchGetBuildBatchesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _BatchGetBuildBatchesError:
    def map(self, status_code: int, content: bytes) -> BatchGetBuildBatchesErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


batch_get_build_batches_error_mapper: Final[ErrorMapper[BatchGetBuildBatchesErrorBody]] = _BatchGetBuildBatchesError()

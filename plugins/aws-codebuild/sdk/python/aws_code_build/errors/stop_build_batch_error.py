from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StopBuildBatchErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StopBuildBatchError:
    def map(self, status_code: int, content: bytes) -> StopBuildBatchErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


stop_build_batch_error_mapper: Final[ErrorMapper[StopBuildBatchErrorBody]] = _StopBuildBatchError()

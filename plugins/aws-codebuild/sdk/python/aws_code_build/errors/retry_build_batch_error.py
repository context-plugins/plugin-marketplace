from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RetryBuildBatchErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RetryBuildBatchError:
    def map(self, status_code: int, content: bytes) -> RetryBuildBatchErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


retry_build_batch_error_mapper: Final[ErrorMapper[RetryBuildBatchErrorBody]] = _RetryBuildBatchError()

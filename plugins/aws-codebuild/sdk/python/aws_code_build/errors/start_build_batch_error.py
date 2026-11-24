from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartBuildBatchErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartBuildBatchError:
    def map(self, status_code: int, content: bytes) -> StartBuildBatchErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_build_batch_error_mapper: Final[ErrorMapper[StartBuildBatchErrorBody]] = _StartBuildBatchError()

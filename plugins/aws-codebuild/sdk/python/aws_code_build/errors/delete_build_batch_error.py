from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteBuildBatchErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteBuildBatchError:
    def map(self, status_code: int, content: bytes) -> DeleteBuildBatchErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_build_batch_error_mapper: Final[ErrorMapper[DeleteBuildBatchErrorBody]] = _DeleteBuildBatchError()

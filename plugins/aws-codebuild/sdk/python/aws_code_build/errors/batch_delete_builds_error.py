from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

BatchDeleteBuildsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _BatchDeleteBuildsError:
    def map(self, status_code: int, content: bytes) -> BatchDeleteBuildsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


batch_delete_builds_error_mapper: Final[ErrorMapper[BatchDeleteBuildsErrorBody]] = _BatchDeleteBuildsError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

BatchDeleteBuilds2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _BatchDeleteBuilds2Error:
    def map(self, status_code: int, content: bytes) -> BatchDeleteBuilds2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


batch_delete_builds2_error_mapper: Final[ErrorMapper[BatchDeleteBuilds2ErrorBody]] = _BatchDeleteBuilds2Error()

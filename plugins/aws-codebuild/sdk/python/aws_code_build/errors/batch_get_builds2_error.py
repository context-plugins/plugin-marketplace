from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

BatchGetBuilds2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _BatchGetBuilds2Error:
    def map(self, status_code: int, content: bytes) -> BatchGetBuilds2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


batch_get_builds2_error_mapper: Final[ErrorMapper[BatchGetBuilds2ErrorBody]] = _BatchGetBuilds2Error()

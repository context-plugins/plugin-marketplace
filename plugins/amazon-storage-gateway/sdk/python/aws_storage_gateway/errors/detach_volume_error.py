from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DetachVolumeErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DetachVolumeError:
    def map(self, status_code: int, content: bytes) -> DetachVolumeErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


detach_volume_error_mapper: Final[ErrorMapper[DetachVolumeErrorBody]] = _DetachVolumeError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AttachVolumeErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AttachVolumeError:
    def map(self, status_code: int, content: bytes) -> AttachVolumeErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


attach_volume_error_mapper: Final[ErrorMapper[AttachVolumeErrorBody]] = _AttachVolumeError()

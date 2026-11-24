from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListVolumes2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListVolumes2Error:
    def map(self, status_code: int, content: bytes) -> ListVolumes2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_volumes2_error_mapper: Final[ErrorMapper[ListVolumes2ErrorBody]] = _ListVolumes2Error()

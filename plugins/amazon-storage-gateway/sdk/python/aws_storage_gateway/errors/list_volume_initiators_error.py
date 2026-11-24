from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListVolumeInitiatorsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListVolumeInitiatorsError:
    def map(self, status_code: int, content: bytes) -> ListVolumeInitiatorsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_volume_initiators_error_mapper: Final[ErrorMapper[ListVolumeInitiatorsErrorBody]] = _ListVolumeInitiatorsError()

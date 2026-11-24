from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateCachediScsiVolumeErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateCachediScsiVolumeError:
    def map(self, status_code: int, content: bytes) -> CreateCachediScsiVolumeErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_cachedi_scsi_volume_error_mapper: Final[
    ErrorMapper[CreateCachediScsiVolumeErrorBody]
] = _CreateCachediScsiVolumeError()

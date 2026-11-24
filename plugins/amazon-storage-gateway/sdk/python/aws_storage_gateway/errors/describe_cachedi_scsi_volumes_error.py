from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeCachediScsiVolumesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeCachediScsiVolumesError:
    def map(self, status_code: int, content: bytes) -> DescribeCachediScsiVolumesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_cachedi_scsi_volumes_error_mapper: Final[
    ErrorMapper[DescribeCachediScsiVolumesErrorBody]
] = _DescribeCachediScsiVolumesError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeStorediScsiVolumesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeStorediScsiVolumesError:
    def map(self, status_code: int, content: bytes) -> DescribeStorediScsiVolumesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_storedi_scsi_volumes_error_mapper: Final[
    ErrorMapper[DescribeStorediScsiVolumesErrorBody]
] = _DescribeStorediScsiVolumesError()

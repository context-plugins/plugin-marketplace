from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateSnapshotFromVolumeRecoveryPointErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateSnapshotFromVolumeRecoveryPointError:
    def map(self, status_code: int, content: bytes) -> CreateSnapshotFromVolumeRecoveryPointErrorBody:
        match status_code:
            case 400 | 500 | 503:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_snapshot_from_volume_recovery_point_error_mapper: Final[
    ErrorMapper[CreateSnapshotFromVolumeRecoveryPointErrorBody]
] = _CreateSnapshotFromVolumeRecoveryPointError()

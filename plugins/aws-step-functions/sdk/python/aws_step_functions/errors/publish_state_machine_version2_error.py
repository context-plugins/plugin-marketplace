from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PublishStateMachineVersion2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PublishStateMachineVersion2Error:
    def map(self, status_code: int, content: bytes) -> PublishStateMachineVersion2ErrorBody:
        match status_code:
            case 400 | 402 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


publish_state_machine_version2_error_mapper: Final[
    ErrorMapper[PublishStateMachineVersion2ErrorBody]
] = _PublishStateMachineVersion2Error()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PublishStateMachineVersionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PublishStateMachineVersionError:
    def map(self, status_code: int, content: bytes) -> PublishStateMachineVersionErrorBody:
        match status_code:
            case 400 | 402 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


publish_state_machine_version_error_mapper: Final[
    ErrorMapper[PublishStateMachineVersionErrorBody]
] = _PublishStateMachineVersionError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

TriggerBranchBuildErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _TriggerBranchBuildError:
    def map(self, status_code: int, content: bytes) -> TriggerBranchBuildErrorBody:
        match status_code:
            case 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


trigger_branch_build_error_mapper: Final[ErrorMapper[TriggerBranchBuildErrorBody]] = _TriggerBranchBuildError()

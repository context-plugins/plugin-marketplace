from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UndeprecateWorkflowType2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UndeprecateWorkflowType2Error:
    def map(self, status_code: int, content: bytes) -> UndeprecateWorkflowType2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


undeprecate_workflow_type2_error_mapper: Final[
    ErrorMapper[UndeprecateWorkflowType2ErrorBody]
] = _UndeprecateWorkflowType2Error()

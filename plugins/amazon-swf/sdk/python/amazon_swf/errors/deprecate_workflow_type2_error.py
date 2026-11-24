from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeprecateWorkflowType2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeprecateWorkflowType2Error:
    def map(self, status_code: int, content: bytes) -> DeprecateWorkflowType2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


deprecate_workflow_type2_error_mapper: Final[
    ErrorMapper[DeprecateWorkflowType2ErrorBody]
] = _DeprecateWorkflowType2Error()

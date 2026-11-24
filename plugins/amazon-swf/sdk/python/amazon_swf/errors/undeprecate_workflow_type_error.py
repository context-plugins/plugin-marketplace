from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UndeprecateWorkflowTypeErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UndeprecateWorkflowTypeError:
    def map(self, status_code: int, content: bytes) -> UndeprecateWorkflowTypeErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


undeprecate_workflow_type_error_mapper: Final[
    ErrorMapper[UndeprecateWorkflowTypeErrorBody]
] = _UndeprecateWorkflowTypeError()

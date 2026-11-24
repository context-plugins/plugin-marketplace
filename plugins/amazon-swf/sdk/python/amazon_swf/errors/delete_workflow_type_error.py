from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteWorkflowTypeErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteWorkflowTypeError:
    def map(self, status_code: int, content: bytes) -> DeleteWorkflowTypeErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_workflow_type_error_mapper: Final[ErrorMapper[DeleteWorkflowTypeErrorBody]] = _DeleteWorkflowTypeError()

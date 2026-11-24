from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RegisterWorkflowTypeErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RegisterWorkflowTypeError:
    def map(self, status_code: int, content: bytes) -> RegisterWorkflowTypeErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


register_workflow_type_error_mapper: Final[ErrorMapper[RegisterWorkflowTypeErrorBody]] = _RegisterWorkflowTypeError()

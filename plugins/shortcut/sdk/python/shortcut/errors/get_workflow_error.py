from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetWorkflowErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetWorkflowError:
    def map(self, status_code: int, content: bytes) -> GetWorkflowErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_workflow_error_mapper: Final[ErrorMapper[GetWorkflowErrorBody]] = _GetWorkflowError()

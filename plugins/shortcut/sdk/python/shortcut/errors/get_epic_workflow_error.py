from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetEpicWorkflowErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetEpicWorkflowError:
    def map(self, status_code: int, content: bytes) -> GetEpicWorkflowErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_epic_workflow_error_mapper: Final[ErrorMapper[GetEpicWorkflowErrorBody]] = _GetEpicWorkflowError()

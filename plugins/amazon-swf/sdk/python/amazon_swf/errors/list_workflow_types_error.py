from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListWorkflowTypesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListWorkflowTypesError:
    def map(self, status_code: int, content: bytes) -> ListWorkflowTypesErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_workflow_types_error_mapper: Final[ErrorMapper[ListWorkflowTypesErrorBody]] = _ListWorkflowTypesError()

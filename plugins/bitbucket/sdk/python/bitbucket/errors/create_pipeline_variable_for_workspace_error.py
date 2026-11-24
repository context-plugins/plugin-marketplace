from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreatePipelineVariableForWorkspaceErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreatePipelineVariableForWorkspaceError:
    def map(self, status_code: int, content: bytes) -> CreatePipelineVariableForWorkspaceErrorBody:
        match status_code:
            case 404 | 409:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_pipeline_variable_for_workspace_error_mapper: Final[
    ErrorMapper[CreatePipelineVariableForWorkspaceErrorBody]
] = _CreatePipelineVariableForWorkspaceError()

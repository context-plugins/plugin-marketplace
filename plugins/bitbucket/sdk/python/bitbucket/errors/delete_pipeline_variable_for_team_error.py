from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeletePipelineVariableForTeamErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeletePipelineVariableForTeamError:
    def map(self, status_code: int, content: bytes) -> DeletePipelineVariableForTeamErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_pipeline_variable_for_team_error_mapper: Final[
    ErrorMapper[DeletePipelineVariableForTeamErrorBody]
] = _DeletePipelineVariableForTeamError()

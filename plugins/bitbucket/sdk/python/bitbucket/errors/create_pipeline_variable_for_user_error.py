from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreatePipelineVariableForUserErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreatePipelineVariableForUserError:
    def map(self, status_code: int, content: bytes) -> CreatePipelineVariableForUserErrorBody:
        match status_code:
            case 404 | 409:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_pipeline_variable_for_user_error_mapper: Final[
    ErrorMapper[CreatePipelineVariableForUserErrorBody]
] = _CreatePipelineVariableForUserError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetPipelineVariableForUserErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetPipelineVariableForUserError:
    def map(self, status_code: int, content: bytes) -> GetPipelineVariableForUserErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_pipeline_variable_for_user_error_mapper: Final[
    ErrorMapper[GetPipelineVariableForUserErrorBody]
] = _GetPipelineVariableForUserError()

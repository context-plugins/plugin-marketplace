from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListPipelineWorkflowsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListPipelineWorkflowsError:
    def map(self, status_code: int, content: bytes) -> ListPipelineWorkflowsErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_pipeline_workflows_error_mapper: Final[ErrorMapper[ListPipelineWorkflowsErrorBody]] = _ListPipelineWorkflowsError()

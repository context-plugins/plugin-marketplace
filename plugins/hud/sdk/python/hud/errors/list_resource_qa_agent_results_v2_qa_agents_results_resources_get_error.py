from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetErrorBody: TypeAlias = (
    ErrorResponse | HttpValidationError | RawError
)


@dataclass(frozen=True, slots=True)
class _ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetError:
    def map(self, status_code: int, content: bytes) -> ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


list_resource_qa_agent_results_v2_qa_agents_results_resources_get_error_mapper: Final[
    ErrorMapper[ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetErrorBody]
] = _ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetError()

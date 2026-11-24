from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostError:
    def map(self, status_code: int, content: bytes) -> RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


run_resource_qa_agent_v2_qa_agents_agent_id_run_resources_post_error_mapper: Final[
    ErrorMapper[RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostErrorBody]
] = _RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostError()

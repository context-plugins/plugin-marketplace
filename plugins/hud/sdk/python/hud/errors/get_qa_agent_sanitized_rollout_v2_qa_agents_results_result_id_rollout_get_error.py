from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetErrorBody: TypeAlias = (
    ErrorResponse | HttpValidationError | RawError
)


@dataclass(frozen=True, slots=True)
class _GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetError:
    def map(
        self, status_code: int, content: bytes
    ) -> GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_qa_agent_sanitized_rollout_v2_qa_agents_results_result_id_rollout_get_error_mapper: Final[
    ErrorMapper[GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetErrorBody]
] = _GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetError()

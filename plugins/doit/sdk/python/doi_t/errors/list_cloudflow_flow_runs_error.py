from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.problem_details import ProblemDetails

ListCloudflowFlowRunsErrorBody: TypeAlias = ProblemDetails | Error | RawError


@dataclass(frozen=True, slots=True)
class _ListCloudflowFlowRunsError:
    def map(self, status_code: int, content: bytes) -> ListCloudflowFlowRunsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 500:
                return decode_json[ProblemDetails](content)
            case 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_cloudflow_flow_runs_error_mapper: Final[
    ErrorMapper[ListCloudflowFlowRunsErrorBody]
] = _ListCloudflowFlowRunsError()

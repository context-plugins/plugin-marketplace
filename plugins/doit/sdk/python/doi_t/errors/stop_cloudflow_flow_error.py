from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.problem_details import ProblemDetails

StopCloudflowFlowErrorBody: TypeAlias = ProblemDetails | Error | RawError


@dataclass(frozen=True, slots=True)
class _StopCloudflowFlowError:
    def map(self, status_code: int, content: bytes) -> StopCloudflowFlowErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 500:
                return decode_json[ProblemDetails](content)
            case 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


stop_cloudflow_flow_error_mapper: Final[ErrorMapper[StopCloudflowFlowErrorBody]] = _StopCloudflowFlowError()

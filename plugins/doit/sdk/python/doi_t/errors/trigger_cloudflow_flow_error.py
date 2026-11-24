from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.cloudflow_v1_flows_actions_trigger409_error1 import CloudflowV1FlowsActionsTrigger409Error1
from ..models.error import Error
from ..models.problem_details import ProblemDetails

TriggerCloudflowFlowErrorBody: TypeAlias = ProblemDetails | CloudflowV1FlowsActionsTrigger409Error1 | Error | RawError


@dataclass(frozen=True, slots=True)
class _TriggerCloudflowFlowError:
    def map(self, status_code: int, content: bytes) -> TriggerCloudflowFlowErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 422 | 500:
                return decode_json[ProblemDetails](content)
            case 409:
                return decode_json[CloudflowV1FlowsActionsTrigger409Error1](content)
            case 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


trigger_cloudflow_flow_error_mapper: Final[ErrorMapper[TriggerCloudflowFlowErrorBody]] = _TriggerCloudflowFlowError()

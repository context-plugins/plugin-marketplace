from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.cloudflow_test_run_validation import CloudflowTestRunValidation
from ..models.error import Error
from ..models.problem_details import ProblemDetails

TestRunCloudflowFlowErrorBody: TypeAlias = ProblemDetails | CloudflowTestRunValidation | Error | RawError


@dataclass(frozen=True, slots=True)
class _TestRunCloudflowFlowError:
    def map(self, status_code: int, content: bytes) -> TestRunCloudflowFlowErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 500:
                return decode_json[ProblemDetails](content)
            case 422:
                return decode_json[CloudflowTestRunValidation](content)
            case 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


test_run_cloudflow_flow_error_mapper: Final[ErrorMapper[TestRunCloudflowFlowErrorBody]] = _TestRunCloudflowFlowError()

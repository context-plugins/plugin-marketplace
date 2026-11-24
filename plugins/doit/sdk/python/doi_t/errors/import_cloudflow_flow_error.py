from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.problem_details import ProblemDetails

ImportCloudflowFlowErrorBody: TypeAlias = ProblemDetails | Error | RawError


@dataclass(frozen=True, slots=True)
class _ImportCloudflowFlowError:
    def map(self, status_code: int, content: bytes) -> ImportCloudflowFlowErrorBody:
        match status_code:
            case 400 | 401 | 403 | 500:
                return decode_json[ProblemDetails](content)
            case 422:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


import_cloudflow_flow_error_mapper: Final[ErrorMapper[ImportCloudflowFlowErrorBody]] = _ImportCloudflowFlowError()

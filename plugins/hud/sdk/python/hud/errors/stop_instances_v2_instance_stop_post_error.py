from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

StopInstancesV2InstanceStopPostErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _StopInstancesV2InstanceStopPostError:
    def map(self, status_code: int, content: bytes) -> StopInstancesV2InstanceStopPostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


stop_instances_v2_instance_stop_post_error_mapper: Final[
    ErrorMapper[StopInstancesV2InstanceStopPostErrorBody]
] = _StopInstancesV2InstanceStopPostError()

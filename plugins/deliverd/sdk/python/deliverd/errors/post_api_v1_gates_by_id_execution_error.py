from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_gates_execution403_error1 import ApiV1GatesExecution403Error1
from ..models.api_v1_gates_execution409_error1 import ApiV1GatesExecution409Error1

PostApiV1GatesByIdExecutionErrorBody: TypeAlias = ApiV1GatesExecution403Error1 | ApiV1GatesExecution409Error1 | RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1GatesByIdExecutionError:
    def map(self, status_code: int, content: bytes) -> PostApiV1GatesByIdExecutionErrorBody:
        match status_code:
            case 403:
                return decode_json[ApiV1GatesExecution403Error1](content)
            case 409:
                return decode_json[ApiV1GatesExecution409Error1](content)
            case _:
                return RawError(status_code, content)


post_api_v1_gates_by_id_execution_error_mapper: Final[
    ErrorMapper[PostApiV1GatesByIdExecutionErrorBody]
] = _PostApiV1GatesByIdExecutionError()

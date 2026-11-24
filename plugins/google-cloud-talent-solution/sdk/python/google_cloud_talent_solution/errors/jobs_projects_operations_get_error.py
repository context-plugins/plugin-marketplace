from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

JobsProjectsOperationsGetErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _JobsProjectsOperationsGetError:
    def map(self, status_code: int, content: bytes) -> JobsProjectsOperationsGetErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


jobs_projects_operations_get_error_mapper: Final[
    ErrorMapper[JobsProjectsOperationsGetErrorBody]
] = _JobsProjectsOperationsGetError()

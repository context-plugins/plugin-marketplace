from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetWorkflowErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetWorkflowError:
    def map(self, status_code: int, content: bytes) -> GetWorkflowErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_workflow_error_mapper: Final[ErrorMapper[GetWorkflowErrorBody]] = _GetWorkflowError()

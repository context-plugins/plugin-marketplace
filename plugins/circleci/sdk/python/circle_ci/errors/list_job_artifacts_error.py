from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListJobArtifactsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListJobArtifactsError:
    def map(self, status_code: int, content: bytes) -> ListJobArtifactsErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_job_artifacts_error_mapper: Final[ErrorMapper[ListJobArtifactsErrorBody]] = _ListJobArtifactsError()

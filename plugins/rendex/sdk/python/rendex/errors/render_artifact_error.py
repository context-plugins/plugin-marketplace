from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

RenderArtifactErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _RenderArtifactError:
    def map(self, status_code: int, content: bytes) -> RenderArtifactErrorBody:
        match status_code:
            case 400:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


render_artifact_error_mapper: Final[ErrorMapper[RenderArtifactErrorBody]] = _RenderArtifactError()

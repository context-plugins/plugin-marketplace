from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListTeamQcPipelinesV2ChecksPipelinesGetErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListTeamQcPipelinesV2ChecksPipelinesGetError:
    def map(self, status_code: int, content: bytes) -> ListTeamQcPipelinesV2ChecksPipelinesGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_team_qc_pipelines_v2_checks_pipelines_get_error_mapper: Final[
    ErrorMapper[ListTeamQcPipelinesV2ChecksPipelinesGetErrorBody]
] = _ListTeamQcPipelinesV2ChecksPipelinesGetError()

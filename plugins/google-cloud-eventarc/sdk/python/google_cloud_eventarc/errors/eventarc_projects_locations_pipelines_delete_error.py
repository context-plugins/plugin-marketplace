from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

EventarcProjectsLocationsPipelinesDeleteErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _EventarcProjectsLocationsPipelinesDeleteError:
    def map(self, status_code: int, content: bytes) -> EventarcProjectsLocationsPipelinesDeleteErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


eventarc_projects_locations_pipelines_delete_error_mapper: Final[
    ErrorMapper[EventarcProjectsLocationsPipelinesDeleteErrorBody]
] = _EventarcProjectsLocationsPipelinesDeleteError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApihubProjectsLocationsCurationsListErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApihubProjectsLocationsCurationsListError:
    def map(self, status_code: int, content: bytes) -> ApihubProjectsLocationsCurationsListErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apihub_projects_locations_curations_list_error_mapper: Final[
    ErrorMapper[ApihubProjectsLocationsCurationsListErrorBody]
] = _ApihubProjectsLocationsCurationsListError()

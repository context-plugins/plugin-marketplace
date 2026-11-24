from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApihubProjectsLocationsGeneratedSpecApisGenerateSpecErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApihubProjectsLocationsGeneratedSpecApisGenerateSpecError:
    def map(self, status_code: int, content: bytes) -> ApihubProjectsLocationsGeneratedSpecApisGenerateSpecErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apihub_projects_locations_generated_spec_apis_generate_spec_error_mapper: Final[
    ErrorMapper[ApihubProjectsLocationsGeneratedSpecApisGenerateSpecErrorBody]
] = _ApihubProjectsLocationsGeneratedSpecApisGenerateSpecError()

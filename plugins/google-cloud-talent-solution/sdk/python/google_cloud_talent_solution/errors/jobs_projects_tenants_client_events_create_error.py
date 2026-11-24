from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

JobsProjectsTenantsClientEventsCreateErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _JobsProjectsTenantsClientEventsCreateError:
    def map(self, status_code: int, content: bytes) -> JobsProjectsTenantsClientEventsCreateErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


jobs_projects_tenants_client_events_create_error_mapper: Final[
    ErrorMapper[JobsProjectsTenantsClientEventsCreateErrorBody]
] = _JobsProjectsTenantsClientEventsCreateError()

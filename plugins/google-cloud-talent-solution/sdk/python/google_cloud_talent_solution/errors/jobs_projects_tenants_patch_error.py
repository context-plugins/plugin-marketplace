from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

JobsProjectsTenantsPatchErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _JobsProjectsTenantsPatchError:
    def map(self, status_code: int, content: bytes) -> JobsProjectsTenantsPatchErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


jobs_projects_tenants_patch_error_mapper: Final[
    ErrorMapper[JobsProjectsTenantsPatchErrorBody]
] = _JobsProjectsTenantsPatchError()

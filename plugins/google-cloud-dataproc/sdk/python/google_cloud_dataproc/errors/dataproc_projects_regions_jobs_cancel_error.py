from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

DataprocProjectsRegionsJobsCancelErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _DataprocProjectsRegionsJobsCancelError:
    def map(self, status_code: int, content: bytes) -> DataprocProjectsRegionsJobsCancelErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


dataproc_projects_regions_jobs_cancel_error_mapper: Final[
    ErrorMapper[DataprocProjectsRegionsJobsCancelErrorBody]
] = _DataprocProjectsRegionsJobsCancelError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

DataprocProjectsRegionsJobsTestIamPermissionsErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _DataprocProjectsRegionsJobsTestIamPermissionsError:
    def map(self, status_code: int, content: bytes) -> DataprocProjectsRegionsJobsTestIamPermissionsErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


dataproc_projects_regions_jobs_test_iam_permissions_error_mapper: Final[
    ErrorMapper[DataprocProjectsRegionsJobsTestIamPermissionsErrorBody]
] = _DataprocProjectsRegionsJobsTestIamPermissionsError()

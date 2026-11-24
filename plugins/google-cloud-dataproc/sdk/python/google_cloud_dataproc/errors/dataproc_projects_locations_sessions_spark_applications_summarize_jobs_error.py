from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsError:
    def map(
        self, status_code: int, content: bytes
    ) -> DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


dataproc_projects_locations_sessions_spark_applications_summarize_jobs_error_mapper: Final[
    ErrorMapper[DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsErrorBody]
] = _DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsError()

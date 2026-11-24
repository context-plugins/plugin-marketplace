from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptError:
    def map(
        self, status_code: int, content: bytes
    ) -> DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


dataproc_projects_locations_batches_spark_applications_access_stage_attempt_error_mapper: Final[
    ErrorMapper[DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptErrorBody]
] = _DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptError()

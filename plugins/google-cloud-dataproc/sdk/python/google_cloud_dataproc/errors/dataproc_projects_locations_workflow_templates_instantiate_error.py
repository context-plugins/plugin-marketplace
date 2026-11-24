from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

DataprocProjectsLocationsWorkflowTemplatesInstantiateErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _DataprocProjectsLocationsWorkflowTemplatesInstantiateError:
    def map(self, status_code: int, content: bytes) -> DataprocProjectsLocationsWorkflowTemplatesInstantiateErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


dataproc_projects_locations_workflow_templates_instantiate_error_mapper: Final[
    ErrorMapper[DataprocProjectsLocationsWorkflowTemplatesInstantiateErrorBody]
] = _DataprocProjectsLocationsWorkflowTemplatesInstantiateError()

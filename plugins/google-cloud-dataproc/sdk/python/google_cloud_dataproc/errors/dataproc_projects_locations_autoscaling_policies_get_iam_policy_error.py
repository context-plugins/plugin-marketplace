from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyError:
    def map(
        self, status_code: int, content: bytes
    ) -> DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


dataproc_projects_locations_autoscaling_policies_get_iam_policy_error_mapper: Final[
    ErrorMapper[DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyErrorBody]
] = _DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyError()

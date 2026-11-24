from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApigeeOrganizationsSecurityAssessmentResultsBatchComputeErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApigeeOrganizationsSecurityAssessmentResultsBatchComputeError:
    def map(
        self, status_code: int, content: bytes
    ) -> ApigeeOrganizationsSecurityAssessmentResultsBatchComputeErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apigee_organizations_security_assessment_results_batch_compute_error_mapper: Final[
    ErrorMapper[ApigeeOrganizationsSecurityAssessmentResultsBatchComputeErrorBody]
] = _ApigeeOrganizationsSecurityAssessmentResultsBatchComputeError()

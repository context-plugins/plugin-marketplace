from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookError:
    def map(
        self, status_code: int, content: bytes
    ) -> ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apigee_organizations_environments_flowhooks_attach_shared_flow_to_flow_hook_error_mapper: Final[
    ErrorMapper[ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookErrorBody]
] = _ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookError()

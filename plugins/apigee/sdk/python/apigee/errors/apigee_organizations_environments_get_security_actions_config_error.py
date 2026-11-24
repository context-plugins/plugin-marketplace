from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigError:
    def map(self, status_code: int, content: bytes) -> ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apigee_organizations_environments_get_security_actions_config_error_mapper: Final[
    ErrorMapper[ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigErrorBody]
] = _ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigError()

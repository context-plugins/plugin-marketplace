from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteError:
    def map(self, status_code: int, content: bytes) -> ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apigee_organizations_security_profiles_environments_delete_error_mapper: Final[
    ErrorMapper[ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteErrorBody]
] = _ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteError()

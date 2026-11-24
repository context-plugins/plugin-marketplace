from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApigeeOrganizationsSecurityProfilesV2CreateErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApigeeOrganizationsSecurityProfilesV2CreateError:
    def map(self, status_code: int, content: bytes) -> ApigeeOrganizationsSecurityProfilesV2CreateErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apigee_organizations_security_profiles_v2_create_error_mapper: Final[
    ErrorMapper[ApigeeOrganizationsSecurityProfilesV2CreateErrorBody]
] = _ApigeeOrganizationsSecurityProfilesV2CreateError()

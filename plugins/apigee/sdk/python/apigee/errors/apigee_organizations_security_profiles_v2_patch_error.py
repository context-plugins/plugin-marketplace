from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApigeeOrganizationsSecurityProfilesV2PatchErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApigeeOrganizationsSecurityProfilesV2PatchError:
    def map(self, status_code: int, content: bytes) -> ApigeeOrganizationsSecurityProfilesV2PatchErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apigee_organizations_security_profiles_v2_patch_error_mapper: Final[
    ErrorMapper[ApigeeOrganizationsSecurityProfilesV2PatchErrorBody]
] = _ApigeeOrganizationsSecurityProfilesV2PatchError()

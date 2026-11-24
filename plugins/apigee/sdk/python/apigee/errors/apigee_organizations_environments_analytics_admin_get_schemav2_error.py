from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2ErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2Error:
    def map(
        self, status_code: int, content: bytes
    ) -> ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2ErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apigee_organizations_environments_analytics_admin_get_schemav2_error_mapper: Final[
    ErrorMapper[ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2ErrorBody]
] = _ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2Error()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsError:
    def map(
        self, status_code: int, content: bytes
    ) -> ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apigee_organizations_environments_security_stats_query_tabular_stats_error_mapper: Final[
    ErrorMapper[ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsErrorBody]
] = _ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsError()

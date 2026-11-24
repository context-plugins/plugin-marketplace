from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApigeeOrganizationsHostSecurityReportsGetResultErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApigeeOrganizationsHostSecurityReportsGetResultError:
    def map(self, status_code: int, content: bytes) -> ApigeeOrganizationsHostSecurityReportsGetResultErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apigee_organizations_host_security_reports_get_result_error_mapper: Final[
    ErrorMapper[ApigeeOrganizationsHostSecurityReportsGetResultErrorBody]
] = _ApigeeOrganizationsHostSecurityReportsGetResultError()

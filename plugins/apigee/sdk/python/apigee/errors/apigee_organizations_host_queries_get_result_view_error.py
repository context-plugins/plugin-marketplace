from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApigeeOrganizationsHostQueriesGetResultViewErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApigeeOrganizationsHostQueriesGetResultViewError:
    def map(self, status_code: int, content: bytes) -> ApigeeOrganizationsHostQueriesGetResultViewErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apigee_organizations_host_queries_get_result_view_error_mapper: Final[
    ErrorMapper[ApigeeOrganizationsHostQueriesGetResultViewErrorBody]
] = _ApigeeOrganizationsHostQueriesGetResultViewError()

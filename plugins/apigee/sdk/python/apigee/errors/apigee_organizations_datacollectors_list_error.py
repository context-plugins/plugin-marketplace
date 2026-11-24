from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApigeeOrganizationsDatacollectorsListErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApigeeOrganizationsDatacollectorsListError:
    def map(self, status_code: int, content: bytes) -> ApigeeOrganizationsDatacollectorsListErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apigee_organizations_datacollectors_list_error_mapper: Final[
    ErrorMapper[ApigeeOrganizationsDatacollectorsListErrorBody]
] = _ApigeeOrganizationsDatacollectorsListError()

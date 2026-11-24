from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApigeeOrganizationsEnvironmentsDeleteErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApigeeOrganizationsEnvironmentsDeleteError:
    def map(self, status_code: int, content: bytes) -> ApigeeOrganizationsEnvironmentsDeleteErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apigee_organizations_environments_delete_error_mapper: Final[
    ErrorMapper[ApigeeOrganizationsEnvironmentsDeleteErrorBody]
] = _ApigeeOrganizationsEnvironmentsDeleteError()

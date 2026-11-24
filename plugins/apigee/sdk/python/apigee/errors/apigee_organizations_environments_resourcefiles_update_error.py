from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApigeeOrganizationsEnvironmentsResourcefilesUpdateErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApigeeOrganizationsEnvironmentsResourcefilesUpdateError:
    def map(self, status_code: int, content: bytes) -> ApigeeOrganizationsEnvironmentsResourcefilesUpdateErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apigee_organizations_environments_resourcefiles_update_error_mapper: Final[
    ErrorMapper[ApigeeOrganizationsEnvironmentsResourcefilesUpdateErrorBody]
] = _ApigeeOrganizationsEnvironmentsResourcefilesUpdateError()

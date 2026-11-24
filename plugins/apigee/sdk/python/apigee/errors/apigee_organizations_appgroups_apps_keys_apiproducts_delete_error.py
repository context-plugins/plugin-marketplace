from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteError:
    def map(self, status_code: int, content: bytes) -> ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apigee_organizations_appgroups_apps_keys_apiproducts_delete_error_mapper: Final[
    ErrorMapper[ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteErrorBody]
] = _ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusErrorBody: TypeAlias = (
    GoogleRpcError | RawError
)


@dataclass(frozen=True, slots=True)
class _ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusError:
    def map(
        self, status_code: int, content: bytes
    ) -> ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apigee_organizations_developers_apps_generate_key_pair_or_update_developer_app_status_error_mapper: Final[
    ErrorMapper[ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusErrorBody]
] = _ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusError()

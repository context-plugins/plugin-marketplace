from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApigeeOrganizationsAppgroupsSubscriptionsExpireErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApigeeOrganizationsAppgroupsSubscriptionsExpireError:
    def map(self, status_code: int, content: bytes) -> ApigeeOrganizationsAppgroupsSubscriptionsExpireErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apigee_organizations_appgroups_subscriptions_expire_error_mapper: Final[
    ErrorMapper[ApigeeOrganizationsAppgroupsSubscriptionsExpireErrorBody]
] = _ApigeeOrganizationsAppgroupsSubscriptionsExpireError()

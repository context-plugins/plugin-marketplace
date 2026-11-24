from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateError:
    def map(
        self, status_code: int, content: bytes
    ) -> ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apigee_organizations_environments_keyvaluemaps_entries_create_error_mapper: Final[
    ErrorMapper[ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateErrorBody]
] = _ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateError()

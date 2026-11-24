from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApigeeOrganizationsApimServiceExtensionsPatchErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApigeeOrganizationsApimServiceExtensionsPatchError:
    def map(self, status_code: int, content: bytes) -> ApigeeOrganizationsApimServiceExtensionsPatchErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apigee_organizations_apim_service_extensions_patch_error_mapper: Final[
    ErrorMapper[ApigeeOrganizationsApimServiceExtensionsPatchErrorBody]
] = _ApigeeOrganizationsApimServiceExtensionsPatchError()

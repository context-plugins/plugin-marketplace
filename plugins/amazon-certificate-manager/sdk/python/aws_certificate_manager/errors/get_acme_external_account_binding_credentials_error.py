from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetAcmeExternalAccountBindingCredentialsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetAcmeExternalAccountBindingCredentialsError:
    def map(self, status_code: int, content: bytes) -> GetAcmeExternalAccountBindingCredentialsErrorBody:
        match status_code:
            case 400 | 403 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_acme_external_account_binding_credentials_error_mapper: Final[
    ErrorMapper[GetAcmeExternalAccountBindingCredentialsErrorBody]
] = _GetAcmeExternalAccountBindingCredentialsError()

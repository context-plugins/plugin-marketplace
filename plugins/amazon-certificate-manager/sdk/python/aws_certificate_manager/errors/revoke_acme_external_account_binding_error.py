from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RevokeAcmeExternalAccountBindingErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RevokeAcmeExternalAccountBindingError:
    def map(self, status_code: int, content: bytes) -> RevokeAcmeExternalAccountBindingErrorBody:
        match status_code:
            case 400 | 403 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


revoke_acme_external_account_binding_error_mapper: Final[
    ErrorMapper[RevokeAcmeExternalAccountBindingErrorBody]
] = _RevokeAcmeExternalAccountBindingError()

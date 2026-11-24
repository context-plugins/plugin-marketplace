from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListAcmeExternalAccountBindingsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListAcmeExternalAccountBindingsError:
    def map(self, status_code: int, content: bytes) -> ListAcmeExternalAccountBindingsErrorBody:
        match status_code:
            case 400 | 403 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_acme_external_account_bindings_error_mapper: Final[
    ErrorMapper[ListAcmeExternalAccountBindingsErrorBody]
] = _ListAcmeExternalAccountBindingsError()

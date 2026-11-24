from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ImportSourceCredentialsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ImportSourceCredentialsError:
    def map(self, status_code: int, content: bytes) -> ImportSourceCredentialsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


import_source_credentials_error_mapper: Final[
    ErrorMapper[ImportSourceCredentialsErrorBody]
] = _ImportSourceCredentialsError()

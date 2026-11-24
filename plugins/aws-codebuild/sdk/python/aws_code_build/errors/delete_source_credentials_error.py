from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteSourceCredentialsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteSourceCredentialsError:
    def map(self, status_code: int, content: bytes) -> DeleteSourceCredentialsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_source_credentials_error_mapper: Final[
    ErrorMapper[DeleteSourceCredentialsErrorBody]
] = _DeleteSourceCredentialsError()

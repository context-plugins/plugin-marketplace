from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteChapCredentialsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteChapCredentialsError:
    def map(self, status_code: int, content: bytes) -> DeleteChapCredentialsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_chap_credentials_error_mapper: Final[ErrorMapper[DeleteChapCredentialsErrorBody]] = _DeleteChapCredentialsError()

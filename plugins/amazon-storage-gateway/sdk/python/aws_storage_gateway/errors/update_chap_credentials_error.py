from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateChapCredentialsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateChapCredentialsError:
    def map(self, status_code: int, content: bytes) -> UpdateChapCredentialsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_chap_credentials_error_mapper: Final[ErrorMapper[UpdateChapCredentialsErrorBody]] = _UpdateChapCredentialsError()

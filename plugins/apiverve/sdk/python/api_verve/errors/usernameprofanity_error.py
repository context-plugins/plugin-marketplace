from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UsernameprofanityErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UsernameprofanityError:
    def map(self, status_code: int, content: bytes) -> UsernameprofanityErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


usernameprofanity_error_mapper: Final[ErrorMapper[UsernameprofanityErrorBody]] = _UsernameprofanityError()

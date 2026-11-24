from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_text

ClixExternalServiceUpdateUserErrorBody: TypeAlias = str | RawError


@dataclass(frozen=True, slots=True)
class _ClixExternalServiceUpdateUserError:
    def map(self, status_code: int, content: bytes) -> ClixExternalServiceUpdateUserErrorBody:
        match status_code:
            case 400:
                return decode_text[str](content)
            case 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


clix_external_service_update_user_error_mapper: Final[
    ErrorMapper[ClixExternalServiceUpdateUserErrorBody]
] = _ClixExternalServiceUpdateUserError()

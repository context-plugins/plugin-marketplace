from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateEmailDomainErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateEmailDomainError:
    def map(self, status_code: int, content: bytes) -> CreateEmailDomainErrorBody:
        match status_code:
            case 400 | 401 | 403 | 409:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_email_domain_error_mapper: Final[ErrorMapper[CreateEmailDomainErrorBody]] = _CreateEmailDomainError()

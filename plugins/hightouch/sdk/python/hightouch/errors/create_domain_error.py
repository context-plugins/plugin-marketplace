from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.enums.internal_server_error import InternalServerErrorOrStr
from ..models.validate_error_json import ValidateErrorJson

CreateDomainErrorBody: TypeAlias = ValidateErrorJson | InternalServerErrorOrStr | RawError


@dataclass(frozen=True, slots=True)
class _CreateDomainError:
    def map(self, status_code: int, content: bytes) -> CreateDomainErrorBody:
        match status_code:
            case 401 | 403:
                return RawError(status_code, content)
            case 422:
                return decode_json[ValidateErrorJson](content)
            case 500:
                return decode_json[InternalServerErrorOrStr](content)
            case _:
                return RawError(status_code, content)


create_domain_error_mapper: Final[ErrorMapper[CreateDomainErrorBody]] = _CreateDomainError()

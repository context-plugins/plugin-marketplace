from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.enums.internal_server_error import InternalServerErrorOrStr
from ..models.validate_error_json import ValidateErrorJson

CreateSourceErrorBody: TypeAlias = ValidateErrorJson | InternalServerErrorOrStr | RawError


@dataclass(frozen=True, slots=True)
class _CreateSourceError:
    def map(self, status_code: int, content: bytes) -> CreateSourceErrorBody:
        match status_code:
            case 401:
                return RawError(status_code, content)
            case 409 | 422:
                return decode_json[ValidateErrorJson](content)
            case 500:
                return decode_json[InternalServerErrorOrStr](content)
            case _:
                return RawError(status_code, content)


create_source_error_mapper: Final[ErrorMapper[CreateSourceErrorBody]] = _CreateSourceError()

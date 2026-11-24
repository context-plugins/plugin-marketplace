from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.unauthenticated1 import Unauthenticated1
from ..models.validation_error1 import ValidationError1

CreateSignRequestErrorBody: TypeAlias = Unauthenticated1 | ValidationError1 | RawError


@dataclass(frozen=True, slots=True)
class _CreateSignRequestError:
    def map(self, status_code: int, content: bytes) -> CreateSignRequestErrorBody:
        match status_code:
            case 401:
                return decode_json[Unauthenticated1](content)
            case 409:
                return RawError(status_code, content)
            case 422:
                return decode_json[ValidationError1](content)
            case _:
                return RawError(status_code, content)


create_sign_request_error_mapper: Final[ErrorMapper[CreateSignRequestErrorBody]] = _CreateSignRequestError()

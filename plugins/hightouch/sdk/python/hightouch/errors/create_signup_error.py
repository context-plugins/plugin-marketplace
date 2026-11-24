from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.enums.internal_server_error import InternalServerErrorOrStr
from ..models.signup_error_response import SignupErrorResponse
from ..models.unions.signups_response1 import SignupsResponse1

CreateSignupErrorBody: TypeAlias = SignupErrorResponse | SignupsResponse1 | InternalServerErrorOrStr | RawError


@dataclass(frozen=True, slots=True)
class _CreateSignupError:
    def map(self, status_code: int, content: bytes) -> CreateSignupErrorBody:
        match status_code:
            case 400 | 404 | 409 | 502:
                return decode_json[SignupErrorResponse](content)
            case 401 | 403:
                return RawError(status_code, content)
            case 422:
                return decode_json[SignupsResponse1](content)
            case 500:
                return decode_json[InternalServerErrorOrStr](content)
            case _:
                return RawError(status_code, content)


create_signup_error_mapper: Final[ErrorMapper[CreateSignupErrorBody]] = _CreateSignupError()

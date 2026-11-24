from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.signup_problem import SignupProblem

CreateSignupRequestErrorBody: TypeAlias = SignupProblem | RawError


@dataclass(frozen=True, slots=True)
class _CreateSignupRequestError:
    def map(self, status_code: int, content: bytes) -> CreateSignupRequestErrorBody:
        match status_code:
            case 400 | 403 | 409 | 429 | 503:
                return decode_json[SignupProblem](content)
            case _:
                return RawError(status_code, content)


create_signup_request_error_mapper: Final[ErrorMapper[CreateSignupRequestErrorBody]] = _CreateSignupRequestError()

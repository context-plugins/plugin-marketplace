from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.signup_problem import SignupProblem

CreateSignupSessionErrorBody: TypeAlias = SignupProblem | RawError


@dataclass(frozen=True, slots=True)
class _CreateSignupSessionError:
    def map(self, status_code: int, content: bytes) -> CreateSignupSessionErrorBody:
        match status_code:
            case 400 | 404 | 409 | 410:
                return decode_json[SignupProblem](content)
            case _:
                return RawError(status_code, content)


create_signup_session_error_mapper: Final[ErrorMapper[CreateSignupSessionErrorBody]] = _CreateSignupSessionError()

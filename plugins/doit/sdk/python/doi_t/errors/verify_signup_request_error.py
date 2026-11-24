from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.signup_problem import SignupProblem

VerifySignupRequestErrorBody: TypeAlias = SignupProblem | RawError


@dataclass(frozen=True, slots=True)
class _VerifySignupRequestError:
    def map(self, status_code: int, content: bytes) -> VerifySignupRequestErrorBody:
        match status_code:
            case 400 | 404 | 409 | 429:
                return decode_json[SignupProblem](content)
            case _:
                return RawError(status_code, content)


verify_signup_request_error_mapper: Final[ErrorMapper[VerifySignupRequestErrorBody]] = _VerifySignupRequestError()

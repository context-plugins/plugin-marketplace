from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.signup_problem import SignupProblem

ResendSignupVerificationErrorBody: TypeAlias = SignupProblem | RawError


@dataclass(frozen=True, slots=True)
class _ResendSignupVerificationError:
    def map(self, status_code: int, content: bytes) -> ResendSignupVerificationErrorBody:
        match status_code:
            case 404 | 409 | 429:
                return decode_json[SignupProblem](content)
            case _:
                return RawError(status_code, content)


resend_signup_verification_error_mapper: Final[
    ErrorMapper[ResendSignupVerificationErrorBody]
] = _ResendSignupVerificationError()

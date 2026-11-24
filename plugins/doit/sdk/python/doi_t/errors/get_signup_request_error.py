from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.signup_problem import SignupProblem

GetSignupRequestErrorBody: TypeAlias = SignupProblem | RawError


@dataclass(frozen=True, slots=True)
class _GetSignupRequestError:
    def map(self, status_code: int, content: bytes) -> GetSignupRequestErrorBody:
        match status_code:
            case 404 | 429:
                return decode_json[SignupProblem](content)
            case _:
                return RawError(status_code, content)


get_signup_request_error_mapper: Final[ErrorMapper[GetSignupRequestErrorBody]] = _GetSignupRequestError()

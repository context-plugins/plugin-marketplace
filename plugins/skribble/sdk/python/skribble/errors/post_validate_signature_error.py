from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem_skribble_additional_information_api import ProblemSkribbleAdditionalInformationApi

PostValidateSignatureErrorBody: TypeAlias = ProblemSkribbleAdditionalInformationApi | RawError


@dataclass(frozen=True, slots=True)
class _PostValidateSignatureError:
    def map(self, status_code: int, content: bytes) -> PostValidateSignatureErrorBody:
        match status_code:
            case 400 | 401 | 403 | 415 | 429 | 500 | 503:
                return decode_json[ProblemSkribbleAdditionalInformationApi](content)
            case _:
                return RawError(status_code, content)


post_validate_signature_error_mapper: Final[ErrorMapper[PostValidateSignatureErrorBody]] = _PostValidateSignatureError()

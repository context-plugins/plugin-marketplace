from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

TakeChallengeErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _TakeChallengeError:
    def map(self, status_code: int, content: bytes) -> TakeChallengeErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


take_challenge_error_mapper: Final[ErrorMapper[TakeChallengeErrorBody]] = _TakeChallengeError()

from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error401_invalid_secret_key import Error401InvalidSecretKey
from ..models.error404_dispute_not_found import Error404DisputeNotFound

PostDisputesChallengeErrorBody: TypeAlias = Error404DisputeNotFound | Error401InvalidSecretKey | str | RawError


@dataclass(frozen=True, slots=True)
class _PostDisputesChallengeError:
    def map(self, status_code: int, content: bytes) -> PostDisputesChallengeErrorBody:
        match status_code:
            case 400:
                return decode_json[Error404DisputeNotFound](content)
            case 401:
                return decode_json[Error401InvalidSecretKey](content)
            case 404 | 500:
                return decode_json[str](content)
            case _:
                return RawError(status_code, content)


post_disputes_challenge_error_mapper: Final[ErrorMapper[PostDisputesChallengeErrorBody]] = _PostDisputesChallengeError()

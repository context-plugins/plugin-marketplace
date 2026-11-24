from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.dedupe_session_invalid_error import DedupeSessionInvalidError
from ..models.error_response import ErrorResponse

PostV3LookalikeContactsErrorBody: TypeAlias = ErrorResponse | DedupeSessionInvalidError | RawError


@dataclass(frozen=True, slots=True)
class _PostV3LookalikeContactsError:
    def map(self, status_code: int, content: bytes) -> PostV3LookalikeContactsErrorBody:
        match status_code:
            case 400 | 403 | 500:
                return decode_json[ErrorResponse](content)
            case 402:
                return RawError(status_code, content)
            case 410:
                return decode_json[DedupeSessionInvalidError](content)
            case _:
                return RawError(status_code, content)


post_v3_lookalike_contacts_error_mapper: Final[
    ErrorMapper[PostV3LookalikeContactsErrorBody]
] = _PostV3LookalikeContactsError()

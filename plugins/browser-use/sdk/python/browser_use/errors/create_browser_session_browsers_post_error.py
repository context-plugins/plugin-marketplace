from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_key_spend_limit_error import ApiKeySpendLimitError
from ..models.profile_not_found_error import ProfileNotFoundError
from ..models.session_timeout_limit_exceeded_error import SessionTimeoutLimitExceededError
from ..models.too_many_concurrent_active_sessions_error import TooManyConcurrentActiveSessionsError
from ..models.validation_error import ValidationError

CreateBrowserSessionBrowsersPostErrorBody: TypeAlias = (
    ApiKeySpendLimitError
    | SessionTimeoutLimitExceededError
    | ProfileNotFoundError
    | ValidationError
    | TooManyConcurrentActiveSessionsError
    | RawError
)


@dataclass(frozen=True, slots=True)
class _CreateBrowserSessionBrowsersPostError:
    def map(self, status_code: int, content: bytes) -> CreateBrowserSessionBrowsersPostErrorBody:
        match status_code:
            case 402:
                return decode_json[ApiKeySpendLimitError](content)
            case 403:
                return decode_json[SessionTimeoutLimitExceededError](content)
            case 404:
                return decode_json[ProfileNotFoundError](content)
            case 422:
                return decode_json[ValidationError](content)
            case 429:
                return decode_json[TooManyConcurrentActiveSessionsError](content)
            case _:
                return RawError(status_code, content)


create_browser_session_browsers_post_error_mapper: Final[
    ErrorMapper[CreateBrowserSessionBrowsersPostErrorBody]
] = _CreateBrowserSessionBrowsersPostError()

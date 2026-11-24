from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

FetchSubscriptionScheduledChangesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _FetchSubscriptionScheduledChangesError:
    def map(self, status_code: int, content: bytes) -> FetchSubscriptionScheduledChangesErrorBody:
        match status_code:
            case 401 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


fetch_subscription_scheduled_changes_error_mapper: Final[
    ErrorMapper[FetchSubscriptionScheduledChangesErrorBody]
] = _FetchSubscriptionScheduledChangesError()

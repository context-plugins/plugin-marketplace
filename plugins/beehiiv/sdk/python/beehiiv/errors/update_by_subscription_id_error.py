from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UpdateBySubscriptionIdErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdateBySubscriptionIdError:
    def map(self, status_code: int, content: bytes) -> UpdateBySubscriptionIdErrorBody:
        match status_code:
            case 400 | 401 | 404 | 422 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update_by_subscription_id_error_mapper: Final[
    ErrorMapper[UpdateBySubscriptionIdErrorBody]
] = _UpdateBySubscriptionIdError()

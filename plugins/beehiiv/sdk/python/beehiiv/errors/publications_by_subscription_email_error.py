from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PublicationsBySubscriptionEmailErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PublicationsBySubscriptionEmailError:
    def map(self, status_code: int, content: bytes) -> PublicationsBySubscriptionEmailErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


publications_by_subscription_email_error_mapper: Final[
    ErrorMapper[PublicationsBySubscriptionEmailErrorBody]
] = _PublicationsBySubscriptionEmailError()

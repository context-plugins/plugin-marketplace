from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json

GetApisV4HermesV0SubscriptionsErrorBody: TypeAlias = str | RawError


@dataclass(frozen=True, slots=True)
class _GetApisV4HermesV0SubscriptionsError:
    def map(self, status_code: int, content: bytes) -> GetApisV4HermesV0SubscriptionsErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[str](content)
            case _:
                return RawError(status_code, content)


get_apis_v4_hermes_v0_subscriptions_error_mapper: Final[
    ErrorMapper[GetApisV4HermesV0SubscriptionsErrorBody]
] = _GetApisV4HermesV0SubscriptionsError()

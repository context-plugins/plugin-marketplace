from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetGroupLinkClicksByReferrerErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetGroupLinkClicksByReferrerError:
    def map(self, status_code: int, content: bytes) -> GetGroupLinkClicksByReferrerErrorBody:
        match status_code:
            case 400 | 403 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_group_link_clicks_by_referrer_error_mapper: Final[
    ErrorMapper[GetGroupLinkClicksByReferrerErrorBody]
] = _GetGroupLinkClicksByReferrerError()

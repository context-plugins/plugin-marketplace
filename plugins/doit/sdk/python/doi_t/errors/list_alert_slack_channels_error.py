from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListAlertSlackChannelsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListAlertSlackChannelsError:
    def map(self, status_code: int, content: bytes) -> ListAlertSlackChannelsErrorBody:
        match status_code:
            case 400 | 401 | 403:
                return decode_json[Error](content)
            case 503:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_alert_slack_channels_error_mapper: Final[
    ErrorMapper[ListAlertSlackChannelsErrorBody]
] = _ListAlertSlackChannelsError()

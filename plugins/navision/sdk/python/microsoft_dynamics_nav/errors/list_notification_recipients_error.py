from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_business_central_administration_center_notifications_api import (
    ErrorResponseBusinessCentralAdministrationCenterNotificationsApi,
)

ListNotificationRecipientsErrorBody: TypeAlias = (
    ErrorResponseBusinessCentralAdministrationCenterNotificationsApi | RawError
)


@dataclass(frozen=True, slots=True)
class _ListNotificationRecipientsError:
    def map(self, status_code: int, content: bytes) -> ListNotificationRecipientsErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponseBusinessCentralAdministrationCenterNotificationsApi](content)
            case _:
                return RawError(status_code, content)


list_notification_recipients_error_mapper: Final[
    ErrorMapper[ListNotificationRecipientsErrorBody]
] = _ListNotificationRecipientsError()

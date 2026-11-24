from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_business_central_administration_center_notifications_api import (
    ErrorResponseBusinessCentralAdministrationCenterNotificationsApi,
)

AddNotificationRecipientErrorBody: TypeAlias = (
    ErrorResponseBusinessCentralAdministrationCenterNotificationsApi | RawError
)


@dataclass(frozen=True, slots=True)
class _AddNotificationRecipientError:
    def map(self, status_code: int, content: bytes) -> AddNotificationRecipientErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponseBusinessCentralAdministrationCenterNotificationsApi](content)
            case _:
                return RawError(status_code, content)


add_notification_recipient_error_mapper: Final[
    ErrorMapper[AddNotificationRecipientErrorBody]
] = _AddNotificationRecipientError()

from __future__ import annotations

from typing import TypeAlias

from ..clixexternalv1_push_notification_target import (
    Clixexternalv1PushNotificationTarget,
    Clixexternalv1PushNotificationTargetDict,
)
from ..clixexternalv1_push_notification_target1 import (
    Clixexternalv1PushNotificationTarget1,
    Clixexternalv1PushNotificationTarget1Dict,
)
from ..clixexternalv1_push_notification_target2 import (
    Clixexternalv1PushNotificationTarget2,
    Clixexternalv1PushNotificationTarget2Dict,
)

Clixexternalv1PushNotificationTarget31: TypeAlias = (
    Clixexternalv1PushNotificationTarget | Clixexternalv1PushNotificationTarget1 | Clixexternalv1PushNotificationTarget2
)
"""Target information for the push notification. Only one of project_user_id, device_id, or user_id should be
present."""

Clixexternalv1PushNotificationTarget31Dict: TypeAlias = (
    Clixexternalv1PushNotificationTargetDict
    | Clixexternalv1PushNotificationTarget1Dict
    | Clixexternalv1PushNotificationTarget2Dict
)

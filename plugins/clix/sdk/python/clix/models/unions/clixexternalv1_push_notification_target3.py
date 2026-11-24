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

Clixexternalv1PushNotificationTarget3: TypeAlias = (
    Clixexternalv1PushNotificationTarget | Clixexternalv1PushNotificationTarget1 | Clixexternalv1PushNotificationTarget2
)
"""Target device and/or user for the push notification."""

Clixexternalv1PushNotificationTarget3Dict: TypeAlias = (
    Clixexternalv1PushNotificationTargetDict
    | Clixexternalv1PushNotificationTarget1Dict
    | Clixexternalv1PushNotificationTarget2Dict
)

from __future__ import annotations

from typing import TypeAlias

from ..clixexternalv1_live_activity_target import Clixexternalv1LiveActivityTarget, Clixexternalv1LiveActivityTargetDict
from ..clixexternalv1_live_activity_target1 import (
    Clixexternalv1LiveActivityTarget1,
    Clixexternalv1LiveActivityTarget1Dict,
)
from ..clixexternalv1_live_activity_target2 import (
    Clixexternalv1LiveActivityTarget2,
    Clixexternalv1LiveActivityTarget2Dict,
)

Clixexternalv1LiveActivityTarget31: TypeAlias = (
    Clixexternalv1LiveActivityTarget | Clixexternalv1LiveActivityTarget1 | Clixexternalv1LiveActivityTarget2
)
"""Target information for the live activity. Only one of project_user_id, device_id, or user_id should be present."""

Clixexternalv1LiveActivityTarget31Dict: TypeAlias = (
    Clixexternalv1LiveActivityTargetDict | Clixexternalv1LiveActivityTarget1Dict | Clixexternalv1LiveActivityTarget2Dict
)

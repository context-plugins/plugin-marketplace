from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TriggerMode(str, Enum):
    """Required. The trigger mode supported by the action."""

    TRIGGER_MODE_UNSPECIFIED = "TRIGGER_MODE_UNSPECIFIED"
    API_HUB_ON_DEMAND_TRIGGER = "API_HUB_ON_DEMAND_TRIGGER"
    API_HUB_SCHEDULE_TRIGGER = "API_HUB_SCHEDULE_TRIGGER"
    NON_API_HUB_MANAGED = "NON_API_HUB_MANAGED"

    __str__ = str.__str__


TriggerModeOrStr: TypeAlias = Annotated[TriggerMode | str, open_enum_validator(TriggerMode)]

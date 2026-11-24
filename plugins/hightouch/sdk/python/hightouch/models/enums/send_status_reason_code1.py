from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SendStatusReasonCode1(str, Enum):
    """Stable code for ``reason``. Present whenever ``reason`` is."""

    SUPPRESSION_LIST = "suppression_list"
    ROLE_BASED_ADDRESS_SUPPRESSION = "role_based_address_suppression"
    SUSPICIOUS_DOMAIN_SUPPRESSION = "suspicious_domain_suppression"
    FREQUENCY_CAP = "frequency_cap"
    QUIET_HOURS = "quiet_hours"
    MISSING_CHANNEL_DATA = "missing_channel_data"
    NO_LOCALE = "no_locale"
    UNSUBSCRIBED = "unsubscribed"
    RENDER_ERROR = "render_error"
    OTHER = "other"
    SEND_FAILED = "send_failed"
    DELIVERY_FAILED = "delivery_failed"

    __str__ = str.__str__


SendStatusReasonCode1OrStr: TypeAlias = Annotated[
    SendStatusReasonCode1 | str, open_enum_validator(SendStatusReasonCode1)
]

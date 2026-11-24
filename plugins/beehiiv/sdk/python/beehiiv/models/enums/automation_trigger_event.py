from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AutomationTriggerEvent(str, Enum):
    API = "api"
    DOWNGRADE = "downgrade"
    EMAIL_SUBMISSION = "email_submission"
    FORM_SUBMISSION = "form_submission"
    MANUAL = "manual"
    POLL_SUBMISSION = "poll_submission"
    PURCHASED_PRODUCT = "purchased_product"
    REFERRAL_ACTION = "referral_action"
    SEGMENT_ACTION = "segment_action"
    SIGNUP = "signup"
    UNENGAGED = "unengaged"
    UPGRADE = "upgrade"

    __str__ = str.__str__


AutomationTriggerEventOrStr: TypeAlias = Annotated[
    AutomationTriggerEvent | str, open_enum_validator(AutomationTriggerEvent)
]

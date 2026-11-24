from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Event(str, Enum):
    CAMPAIGN_CREATED = "campaign.created"
    CAMPAIGN_UPDATED = "campaign.updated"
    TICKET_CREATED = "ticket.created"
    TRANSACTION_SUCCEEDED = "transaction.succeeded"
    CONTACT_CREATED = "contact.created"
    PLAN_CANCELED = "plan.canceled"
    PLAN_CREATED = "plan.created"
    PLAN_FAILED = "plan.failed"
    PLAN_PAUSED = "plan.paused"
    PLAN_RESUMED = "plan.resumed"
    PLAN_UPDATED = "plan.updated"
    REFUND_CREATED = "refund.created"

    __str__ = str.__str__


EventOrStr: TypeAlias = Annotated[Event | str, open_enum_validator(Event)]

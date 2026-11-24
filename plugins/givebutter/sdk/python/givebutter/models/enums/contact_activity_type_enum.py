from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContactActivityTypeEnum(str, Enum):
    ARCHIVED = "archived"
    CAMPAIGN_JOINED = "campaign.joined"
    EMAIL = "email"
    EMAIL_SUBSCRIBED = "email.subscribed"
    EMAIL_UNSUBSCRIBED = "email.unsubscribed"
    LETTER = "letter"
    MEETING = "meeting"
    NOTE = "note"
    PHONE_CALL = "phone_call"
    RECURRING_PLAN_CANCELED = "recurring_plan.canceled"
    RECURRING_PLAN_CREATED = "recurring_plan.created"
    RECURRING_PLAN_ACTIVATED = "recurring_plan.activated"
    SIGNUP_FORM_SUBMITTED = "signup_form.submitted"
    SMS = "sms"
    SMS_SUBSCRIBED = "sms.subscribed"
    SMS_UNSUBSCRIBED = "sms.unsubscribed"
    SUBSCRIPTION_FORM_SUBMITTED = "subscription_form.submitted"
    COMPLETED_TASK = "completed_task"
    CREATED_TASK = "created_task"
    TICKET_ISSUED = "ticket.issued"
    TRANSACTION_RECIEVED = "transaction.recieved"
    TRANSACTION_SUCCEEDED = "transaction.succeeded"
    TRANSACTION_ACKNOWLEDGED = "transaction.acknowledged"
    TRANSACTION_UNACKNOWLEDGED = "transaction.unacknowledged"
    UNARCHIVED = "unarchived"
    VOLUNTEER_ACTIVITY = "volunteer_activity"
    SOFT_CREDITED = "soft_credited"
    TAGGED = "tagged"
    UNTAGGED = "untagged"
    CUSTOM_FIELD_UPDATED = "custom_field.updated"
    VIDEO_MESSAGE_SENT = "video_message.sent"
    VIDEO_MESSAGE_DELETED = "video_message.deleted"

    __str__ = str.__str__


ContactActivityTypeEnumOrStr: TypeAlias = Annotated[
    ContactActivityTypeEnum | str, open_enum_validator(ContactActivityTypeEnum)
]

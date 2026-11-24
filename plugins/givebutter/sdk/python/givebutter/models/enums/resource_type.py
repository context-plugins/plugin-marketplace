from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ResourceType(str, Enum):
    TRANSACTION = "transaction"
    PLAN = "plan"
    TICKET = "ticket"
    MESSAGE = "message"
    MAIL_PIECE = "mail_piece"
    SOFT_CREDIT = "soft_credit"
    SUBSCRIPTION_LOG = "subscription_log"

    __str__ = str.__str__


ResourceTypeOrStr: TypeAlias = Annotated[ResourceType | str, open_enum_validator(ResourceType)]

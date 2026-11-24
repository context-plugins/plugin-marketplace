from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TriggerEvent(str, Enum):
    CONTACT_CREATED = "contact.created"
    CONTACT_UPDATED = "contact.updated"
    DEAL_CREATED = "deal.created"
    DEAL_UPDATED = "deal.updated"
    DEAL_STAGE_CHANGED = "deal.stage_changed"

    __str__ = str.__str__


TriggerEventOrStr: TypeAlias = Annotated[TriggerEvent | str, open_enum_validator(TriggerEvent)]

from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContextJidScreenApi(str, Enum):
    """Default lead, or purchase when only a url or domain is given."""

    LEAD = "lead"
    INBOUND_EMAIL = "inbound_email"
    PARTNERSHIP = "partnership"
    VENDOR = "vendor"
    PURCHASE = "purchase"
    MARKETPLACE_SELLER = "marketplace_seller"
    AGENT_ACTION = "agent_action"

    __str__ = str.__str__


ContextJidScreenApiOrStr: TypeAlias = Annotated[ContextJidScreenApi | str, open_enum_validator(ContextJidScreenApi)]

from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ScopeFellowDeveloperWebhooksApi(str, Enum):
    """Who the webhook belongs to. 'user' is the authenticated user, the default and the existing behaviour. 'workspace'
    is the whole account: it receives every matching event with no per-user filter, and each event is delivered once
    rather than once per attendee. Creating one requires a privileged API key."""

    USER = "user"
    WORKSPACE = "workspace"

    __str__ = str.__str__


ScopeFellowDeveloperWebhooksApiOrStr: TypeAlias = Annotated[
    ScopeFellowDeveloperWebhooksApi | str, open_enum_validator(ScopeFellowDeveloperWebhooksApi)
]

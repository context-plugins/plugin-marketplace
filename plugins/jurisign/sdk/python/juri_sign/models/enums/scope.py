from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Scope(str, Enum):
    DOCUMENTS_READ = "documents:read"
    DOCUMENTS_WRITE = "documents:write"
    SIGN_REQUESTS_READ = "sign-requests:read"
    SIGN_REQUESTS_WRITE = "sign-requests:write"
    WEBHOOKS_MANAGE = "webhooks:manage"

    __str__ = str.__str__


ScopeOrStr: TypeAlias = Annotated[Scope | str, open_enum_validator(Scope)]

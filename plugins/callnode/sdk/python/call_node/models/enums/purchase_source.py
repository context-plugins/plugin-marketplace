from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PurchaseSource(str, Enum):
    """How the number was purchased — via the dashboard (``web``) or this API (``api``)."""

    WEB = "web"
    API = "api"

    __str__ = str.__str__


PurchaseSourceOrStr: TypeAlias = Annotated[PurchaseSource | str, open_enum_validator(PurchaseSource)]

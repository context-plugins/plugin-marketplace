from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomViewScope(str, Enum):
    """'customer': data is scoped to one viewing customer and the view is embeddable per-customer. 'organization': data
    is org-wide and the view is internal-only."""

    CUSTOMER = "customer"
    ORGANIZATION = "organization"

    __str__ = str.__str__


CustomViewScopeOrStr: TypeAlias = Annotated[CustomViewScope | str, open_enum_validator(CustomViewScope)]

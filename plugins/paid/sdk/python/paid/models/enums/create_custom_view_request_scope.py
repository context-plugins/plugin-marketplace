from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CreateCustomViewRequestScope(str, Enum):
    """'customer' (default): data is scoped to one viewing customer and the view is embeddable per-customer.
    'organization': data is org-wide; the view is internal-only (visible to org members in Paid, never embeddable)."""

    CUSTOMER = "customer"
    ORGANIZATION = "organization"

    __str__ = str.__str__


CreateCustomViewRequestScopeOrStr: TypeAlias = Annotated[
    CreateCustomViewRequestScope | str, open_enum_validator(CreateCustomViewRequestScope)
]

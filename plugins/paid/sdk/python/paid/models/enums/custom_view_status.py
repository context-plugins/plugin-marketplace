from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomViewStatus(str, Enum):
    """A view is DRAFT until explicitly published. For customer-scoped views, only PUBLISHED views are embeddable and
    served to end-customers; a DRAFT is not. For organization-scoped views, publishing is only a 'ready to use' marker —
    both DRAFT and PUBLISHED are visible to your organization's members in Paid (publishing does not change who in the
    org can see it), and neither is ever embeddable to an end-customer."""

    DRAFT = "DRAFT"
    PUBLISHED = "PUBLISHED"

    __str__ = str.__str__


CustomViewStatusOrStr: TypeAlias = Annotated[CustomViewStatus | str, open_enum_validator(CustomViewStatus)]

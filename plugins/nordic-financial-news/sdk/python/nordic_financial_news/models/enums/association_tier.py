from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AssociationTier(str, Enum):
    """How the company relates to the article. ``principal`` (subject, partner, investor, competitor) is the default
    set; ``peripheral`` (source, advisor, passing mention) appears only when ``include_peripheral=true``. Always
    present."""

    PRINCIPAL = "principal"
    PERIPHERAL = "peripheral"

    __str__ = str.__str__


AssociationTierOrStr: TypeAlias = Annotated[AssociationTier | str, open_enum_validator(AssociationTier)]

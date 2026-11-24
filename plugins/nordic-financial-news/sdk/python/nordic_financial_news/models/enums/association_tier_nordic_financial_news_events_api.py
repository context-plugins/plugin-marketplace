from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AssociationTierNordicFinancialNewsEventsApi(str, Enum):
    """How the company relates to the event. ``principal`` (subject, acquirer, target, investor, issuer, partner) is the
    default set; ``peripheral`` (advisor, speaker, passing mention) appears only when ``include_peripheral=true``.
    Always present."""

    PRINCIPAL = "principal"
    PERIPHERAL = "peripheral"

    __str__ = str.__str__


AssociationTierNordicFinancialNewsEventsApiOrStr: TypeAlias = Annotated[
    AssociationTierNordicFinancialNewsEventsApi | str, open_enum_validator(AssociationTierNordicFinancialNewsEventsApi)
]

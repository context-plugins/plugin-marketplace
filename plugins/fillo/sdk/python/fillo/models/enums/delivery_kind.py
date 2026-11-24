from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DeliveryKind(str, Enum):
    WEBHOOK = "webhook"
    INTEGRATION = "integration"

    __str__ = str.__str__


DeliveryKindOrStr: TypeAlias = Annotated[DeliveryKind | str, open_enum_validator(DeliveryKind)]

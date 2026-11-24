from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SubscriptionActorDto(str, Enum):
    """Subscription change actor information."""

    CLIENT = "CLIENT"
    SYSTEM = "SYSTEM"

    __str__ = str.__str__


SubscriptionActorDtoOrStr: TypeAlias = Annotated[SubscriptionActorDto | str, open_enum_validator(SubscriptionActorDto)]

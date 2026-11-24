from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Provider(str, Enum):
    AMAZONPAY = "amazonpay"

    __str__ = str.__str__


ProviderOrStr: TypeAlias = Annotated[Provider | str, open_enum_validator(Provider)]

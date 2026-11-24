from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Source(str, Enum):
    """This field specifies author that led to the creation of the record. It can take one of the following values:
      - ``customer``: Indicates that the action was initiated by a customer;
      - ``merchant``: Indicates that the action was initiated by a merchant;
      - ``tabby-support``: Indicates that the action was initiated by Tabby support."""

    CUSTOMER = "customer"
    MERCHANT = "merchant"
    TABBY_SUPPORT = "tabby-support"

    __str__ = str.__str__


SourceOrStr: TypeAlias = Annotated[Source | str, open_enum_validator(Source)]

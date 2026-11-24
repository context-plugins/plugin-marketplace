from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeDoiTServiceQuotasApi(str, Enum):
    """Provider resource scope for the quota."""

    ACCOUNT = "account"
    PROJECT = "project"

    __str__ = str.__str__


TypeDoiTServiceQuotasApiOrStr: TypeAlias = Annotated[
    TypeDoiTServiceQuotasApi | str, open_enum_validator(TypeDoiTServiceQuotasApi)
]

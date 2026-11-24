from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeDynamics365BusinessCentralApiV20CustomersApi(str, Enum):
    """The customer type"""

    PERSON = "Person"
    COMPANY = "Company"

    __str__ = str.__str__


TypeDynamics365BusinessCentralApiV20CustomersApiOrStr: TypeAlias = Annotated[
    TypeDynamics365BusinessCentralApiV20CustomersApi | str,
    open_enum_validator(TypeDynamics365BusinessCentralApiV20CustomersApi),
]

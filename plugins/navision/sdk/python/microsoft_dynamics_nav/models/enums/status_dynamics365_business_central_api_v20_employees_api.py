from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDynamics365BusinessCentralApiV20EmployeesApi(str, Enum):
    ACTIVE = "Active"
    INACTIVE = "Inactive"

    __str__ = str.__str__


StatusDynamics365BusinessCentralApiV20EmployeesApiOrStr: TypeAlias = Annotated[
    StatusDynamics365BusinessCentralApiV20EmployeesApi | str,
    open_enum_validator(StatusDynamics365BusinessCentralApiV20EmployeesApi),
]

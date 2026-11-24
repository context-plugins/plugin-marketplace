from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeUiPathOrchestratorMachinesApi(str, Enum):
    """Whether this is a physical machine or a cloud robot template"""

    STANDARD = "Standard"
    TEMPLATE = "Template"

    __str__ = str.__str__


TypeUiPathOrchestratorMachinesApiOrStr: TypeAlias = Annotated[
    TypeUiPathOrchestratorMachinesApi | str, open_enum_validator(TypeUiPathOrchestratorMachinesApi)
]

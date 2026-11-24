from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ResolutionDoiTCloudFlowApi(str, Enum):
    BOUND = "bound"
    SUGGESTED = "suggested"
    WILL_CREATE = "willCreate"
    UNBOUND = "unbound"

    __str__ = str.__str__


ResolutionDoiTCloudFlowApiOrStr: TypeAlias = Annotated[
    ResolutionDoiTCloudFlowApi | str, open_enum_validator(ResolutionDoiTCloudFlowApi)
]

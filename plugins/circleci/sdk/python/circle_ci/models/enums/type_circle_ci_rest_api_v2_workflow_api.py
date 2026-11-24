from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeCircleCiRestApiV2WorkflowApi(str, Enum):
    """The type of job"""

    BUILD = "build"
    APPROVAL = "approval"

    __str__ = str.__str__


TypeCircleCiRestApiV2WorkflowApiOrStr: TypeAlias = Annotated[
    TypeCircleCiRestApiV2WorkflowApi | str, open_enum_validator(TypeCircleCiRestApiV2WorkflowApi)
]

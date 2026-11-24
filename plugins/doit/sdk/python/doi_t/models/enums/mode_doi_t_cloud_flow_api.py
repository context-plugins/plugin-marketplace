from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ModeDoiTCloudFlowApi(str, Enum):
    TEST = "test"
    STANDARD = "standard"

    __str__ = str.__str__


ModeDoiTCloudFlowApiOrStr: TypeAlias = Annotated[ModeDoiTCloudFlowApi | str, open_enum_validator(ModeDoiTCloudFlowApi)]

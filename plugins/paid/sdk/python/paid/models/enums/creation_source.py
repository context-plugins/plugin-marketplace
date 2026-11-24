from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CreationSource(str, Enum):
    MANUAL = "manual"
    API = "api"
    CRM = "crm"
    OTHER = "other"

    __str__ = str.__str__


CreationSourceOrStr: TypeAlias = Annotated[CreationSource | str, open_enum_validator(CreationSource)]

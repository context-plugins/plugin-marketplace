from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class KindDeliverdDevGatesApi(str, Enum):
    REPORT_VERSION = "report_version"
    EXTERNAL = "external"

    __str__ = str.__str__


KindDeliverdDevGatesApiOrStr: TypeAlias = Annotated[
    KindDeliverdDevGatesApi | str, open_enum_validator(KindDeliverdDevGatesApi)
]

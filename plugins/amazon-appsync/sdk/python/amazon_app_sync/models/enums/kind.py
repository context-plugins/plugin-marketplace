from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Kind(str, Enum):
    """The resolver type. UNIT: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT
    resolver to run a GraphQL query against a single data source. PIPELINE: A PIPELINE resolver type. You can use a
    PIPELINE resolver to invoke a series of Function objects in a serial manner. You can use a pipeline resolver to run
    a GraphQL query against multiple data sources."""

    UNIT = "UNIT"
    PIPELINE = "PIPELINE"

    __str__ = str.__str__


KindOrStr: TypeAlias = Annotated[Kind | str, open_enum_validator(Kind)]

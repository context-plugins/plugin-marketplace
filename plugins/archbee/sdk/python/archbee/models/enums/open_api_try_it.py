from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OpenApiTryIt(str, Enum):
    """OPTIONAL. You can now test your API's directly in the editor or on your published docs with the new API Try
    It!"""

    TRUE = "true"
    FALSE = "false"

    __str__ = str.__str__


OpenApiTryItOrStr: TypeAlias = Annotated[OpenApiTryIt | str, open_enum_validator(OpenApiTryIt)]

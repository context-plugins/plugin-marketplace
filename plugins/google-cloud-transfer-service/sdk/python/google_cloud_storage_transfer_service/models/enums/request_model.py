from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RequestModel(str, Enum):
    """Specifies the API request model used to call the storage service. When not specified, the default value of
    RequestModel REQUEST_MODEL_VIRTUAL_HOSTED_STYLE is used."""

    REQUEST_MODEL_UNSPECIFIED = "REQUEST_MODEL_UNSPECIFIED"
    REQUEST_MODEL_VIRTUAL_HOSTED_STYLE = "REQUEST_MODEL_VIRTUAL_HOSTED_STYLE"
    REQUEST_MODEL_PATH_STYLE = "REQUEST_MODEL_PATH_STYLE"

    __str__ = str.__str__


RequestModelOrStr: TypeAlias = Annotated[RequestModel | str, open_enum_validator(RequestModel)]

from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Method(str, Enum):
    BLOB_SUBMIT = "blob.Submit"
    BLOB_GET = "blob.Get"
    BLOB_GET_ALL = "blob.GetAll"
    BLOB_GET_PROOF = "blob.GetProof"
    BLOB_INCLUDED = "blob.Included"
    BLOB_SUBSCRIBE = "blob.Subscribe"

    __str__ = str.__str__


MethodOrStr: TypeAlias = Annotated[Method | str, open_enum_validator(Method)]

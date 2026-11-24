from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type1 import Type1OrStr


class ProjectCheckoutKeyRequest(SdkBaseModel):
    type_: Type1OrStr = Field(alias="type")
    """The type of checkout key to create"""


class ProjectCheckoutKeyRequestDict(TypedDict):
    type_: Type1OrStr

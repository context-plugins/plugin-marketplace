from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ClassConnectionsApi(SdkBaseModel):
    type_: str = Field(alias="type")
    """Account type"""

    product: str
    """Product name."""


class ClassConnectionsApiDict(TypedDict):
    type_: str
    product: str

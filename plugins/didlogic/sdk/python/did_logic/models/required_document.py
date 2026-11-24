from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RequiredDocument(SdkBaseModel):
    type_: int = Field(alias="type")
    """Document type ID"""

    name: str
    """Document type name"""


class RequiredDocumentDict(TypedDict):
    type_: int
    name: str

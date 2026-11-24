from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Class1(SdkBaseModel):
    """Describes the class(type) of accounts. - transaction - savings - credit-card - mortgage - loan - investment -
    term-deposit - insurance - foreign - unknown"""

    type_: str = Field(alias="type")
    """Account type"""

    product: str
    """Product name."""


class Class1Dict(TypedDict):
    type_: str
    product: str

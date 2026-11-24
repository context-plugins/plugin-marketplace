from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel
from .dimensions import Dimensions, DimensionsDict
from .enums.type1 import Type1, Type1OrStr
from .unions.weight2 import Weight2, Weight2Dict


class Package(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    type_: Type1OrStr = Field(default=Type1.CUSTOM, alias="type")
    """Select custom unless the shipment will use the exact named carrier packaging."""

    weight: Weight2
    dimensions: Dimensions
    irregular: bool = False


class PackageDict(TypedDict):
    type_: NotRequired[Type1OrStr]
    weight: Weight2Dict
    dimensions: DimensionsDict
    irregular: NotRequired[bool]
